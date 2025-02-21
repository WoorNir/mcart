import { Tag } from 'main.core';
import AvatarHexagonGuest from './avatar-hexagon-guest';

export default class AvatarHexagonAccent extends AvatarHexagonGuest
{
	getContainer(): HTMLElement
	{
		if (!this.node.avatar)
		{
			this.node.avatar = Tag.render`
				<div class="ui-avatar --hexagon --accent">
					<svg viewBox="0 0 102 102">
						<path class="ui-avatar-border-inner" d="M40.4429 2.77436C47.0211 -0.823713 54.979 -0.823711 61.5572 2.77436L88.9207 17.7412C95.9759 21.6001 100.363 29.001 100.363 37.0426V64.9573C100.363 72.9989 95.9759 80.3998 88.9207 84.2588L61.5572 99.2256C54.979 102.824 47.0211 102.824 40.4429 99.2256L13.0794 84.2588C6.02419 80.3998 1.6366 72.9989 1.6366 64.9573V37.0426C1.6366 29.001 6.0242 21.6001 13.0794 17.7412L40.4429 2.77436Z"/>
						<path class="ui-avatar-border" fill="url(#ui-avatar-gradient-accent-${this.getUnicId()})"  d="M87.126 21.0224L59.7625 6.05561C54.3025 3.06921 47.6975 3.06921 42.2376 6.0556L14.8741 21.0224C9.01831 24.2253 5.3766 30.3681 5.3766 37.0426V64.9573C5.3766 71.6319 9.0183 77.7746 14.8741 80.9775L42.2376 95.9443C47.6975 98.9307 54.3025 98.9307 59.7625 95.9443L87.126 80.9775C92.9818 77.7746 96.6235 71.6319 96.6235 64.9573V37.0426C96.6235 30.3681 92.9818 24.2253 87.126 21.0224ZM61.5572 2.77436C54.979 -0.823711 47.0211 -0.823713 40.4429 2.77436L13.0794 17.7412C6.0242 21.6001 1.6366 29.001 1.6366 37.0426V64.9573C1.6366 72.9989 6.02419 80.3998 13.0794 84.2588L40.4429 99.2256C47.0211 102.824 54.979 102.824 61.5572 99.2256L88.9207 84.2588C95.9759 80.3998 100.363 72.9989 100.363 64.9573V37.0426C100.363 29.001 95.9759 21.6001 88.9207 17.7412L61.5572 2.77436Z"/>
						<path class="ui-avatar-base" d="M44.2368 10.2019C48.4219 7.93252 53.5781 7.93252 57.7632 10.2019L85.2368 25.0997C89.4219 27.3692 92 31.5632 92 36.1021V65.8977C92 70.4365 89.4219 74.6306 85.2368 76.9L57.7632 91.7978C53.5781 94.0672 48.4219 94.0672 44.2368 91.7978L16.7632 76.9C12.5781 74.6306 10 70.4365 10 65.8977V36.1021C10 31.5632 12.5781 27.3692 16.7632 25.0997L44.2368 10.2019Z"/>
						<linearGradient id="ui-avatar-gradient-accent-${this.getUnicId()}" x1="13.3983" y1="2.16102" x2="53.5932" y2="60.0763" gradientUnits="userSpaceOnUse">
							<stop stop-color="var(--ui-avatar-color-gradient-start)"/>
							<stop offset="1" stop-color="var(--ui-avatar-color-gradient-stop)"/>
						</linearGradient>
					</svg>
				</div>
			`;
		}

		return this.node.avatar;
	}
}
