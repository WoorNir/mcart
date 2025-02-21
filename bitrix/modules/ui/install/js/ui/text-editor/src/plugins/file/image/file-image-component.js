import { Dom, Tag } from 'main.core';
import { MemoryCache, type BaseCache } from 'main.core.cache';
import type { BaseEvent } from 'main.core.events';
import type { EditorConfig } from 'ui.lexical.core';

import { $getNodeByKey } from 'ui.lexical.core';

import DecoratorComponent from '../../../decorator-component';
import FigureResizer from '../../../helpers/figure-resizer';
import { $isFileImageNode, type FileImageNode } from './file-image-node';

import type { JsonObject } from 'main.core';
import type { DecoratorComponentOptions } from '../../../types/decorator-component-options';

export class FileImageComponent extends DecoratorComponent
{
	#refs: BaseCache<HTMLElement> = new MemoryCache();
	#figureResizer: FigureResizer = null;

	constructor(options: DecoratorComponentOptions)
	{
		super(options);

		this.#figureResizer = new FigureResizer({
			target: this.getImage(),
			editor: this.getEditor(),
			originalWidth: this.getOption('width'),
			originalHeight: this.getOption('height'),
			events: {
				onResizeStart: this.#handleResizeStart.bind(this),
				onResizeEnd: this.#handleResizeEnd.bind(this),
			},
		});

		this.getNodeSelection().onSelect((selected: boolean) => {
			if (selected || this.#figureResizer.isResizing())
			{
				Dom.addClass(this.#getContainer(), '--selected');
				this.#figureResizer.show();
			}
			else
			{
				Dom.removeClass(this.#getContainer(), '--selected');
				this.#figureResizer.hide();
			}

			const draggable = selected && !this.#figureResizer.isResizing();
			this.#setDraggable(draggable);
		});

		this.update(this.getOptions());
		this.#render();
	}

	#render()
	{
		Dom.append(this.#getContainer(), this.getTarget());
	}

	#getContainer(): HTMLElement
	{
		return this.#refs.remember('container', () => {
			const figureResizer = this.#figureResizer.getContainer();

			return Tag.render`
				<div class="ui-text-editor-file-image-component">
					${this.#getImageContainer()}
					${figureResizer}
				</div>
			`;
		});
	}

	#getImageContainer(): HTMLElement
	{
		return this.#refs.remember('image-container', () => {
			return Tag.render`
				<div class="ui-text-editor-file-image-container">
					${this.getImage()}
				</div>
			`;
		});
	}

	#setDraggable(draggable: boolean): void
	{
		Dom.attr(this.#getImageContainer(), { draggable });
		if (draggable)
		{
			Dom.addClass(this.#getContainer(), '--draggable');
		}
		else
		{
			Dom.removeClass(this.#getContainer(), '--draggable');
		}
	}

	#handleResizeStart(event: BaseEvent): void
	{
		this.#setDraggable(false);
		this.setSelected(true);
	}

	#handleResizeEnd(event: BaseEvent): void
	{
		this.setSelected(true);

		this.getEditor().update(() => {
			const node: FileImageNode = $getNodeByKey(this.getNodeKey());
			if ($isFileImageNode(node))
			{
				const { width, height } = event.getData();
				node.setWidthAndHeight(width, height);
			}
		});
	}

	getImage(): HTMLImageElement
	{
		return this.#refs.remember('image', () => {
			const img: HTMLImageElement = document.createElement('img');
			img.draggable = false;
			img.src = this.getOption('src');

			const config: EditorConfig = this.getOption('config', {});
			if (config?.theme?.image?.img)
			{
				img.className = config.theme.image.img;
			}

			return img;
		});
	}

	update(options: JsonObject)
	{
		const width = options.width > 0 ? `${options.width}px` : 'inherit';
		const aspectRatio = options.width > 0 && options.height > 0 ? `${options.width} / ${options.height}` : 'auto';

		Dom.style(this.getImage(), { width, height: 'auto', aspectRatio });
	}
}
