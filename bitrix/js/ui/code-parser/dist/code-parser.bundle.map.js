{"version":3,"file":"code-parser.bundle.map.js","names":["this","BX","UI","exports","TokenType","WHITESPACE","SEMICOLON","OPERATOR","BRACE","BRACKET","PARENTHESES","WORD","REGEX","STRING_DOUBLE","STRING_SINGLE","STRING_TEMPLATE","XML_COMMENT","COMMENT_MULTILINE","COMMENT_SLASH","COMMENT_HASH","CommentTokenTypes","Set","StringTokenTypes","mergeTokens","tokens","result","prevToken","forEach","token","type","content","push","WORD_REGEX","keywords","_normalizeTokenType","babelHelpers","classPrivateFieldLooseKey","CodeParser","constructor","Object","defineProperty","value","_normalizeTokenType2","parse","text","merge","currentPosition","nextChar","currentChar","prevChar","beforePrevChar","tokenContent","tokenType","lastTokenType","isMultiChar","shouldFinalizeToken","test","getTokenType","includes","has","length","classPrivateFieldLooseBase"],"sources":["code-parser.bundle.js"],"mappings":"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"}