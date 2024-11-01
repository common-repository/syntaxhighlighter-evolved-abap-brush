/**
 * abap-brush
 * http://fanninger.at/wordpress/syntaxhighlighter-evolved-abap-brush/
 *
 * @version
 * 0.3 (March 13, 2011)
 * 
 * @copyright
 * Copyleft 2011 fanningert
 *
 * @license
 * Free
 *
 */

SyntaxHighlighter.brushes.Abap=function(){
	
	var functions = 'STRLEN XSTRLEN ABS SIGN CEIL FLOOR TRUNC FRAC';
	
	this.regexList=[
	    /* comments */
		{ regex: /\*.*$/gm,														css: 'comments' },
		{ regex: /\".*$/gm,														css: 'comments' },
		/* strings */
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString,					css: 'string' },
		/* numbers */
		//{ regex: /(-)?(\d)+(\.(\d)?)?(E\+(\d)+)?/g,								css: 'value' },
		/* SY and SYST */
		{ regex: /(SY|SYST)-(DBSYS|HOST|OPSYS|SYSID|LANGU|MANDT|MODNO|UNAME|DATUM|FDAYW|TIMLO|UZEIT|CALLD|CPROG|DBNAM|DYNGR|DYNNR|LDBPG|REPID|TCODE|BATCH|BINPT|ABCDE|ULINE|VLINE|INDEX|FDPOS|TABIX|TFILL|DBCNT|SUBRC|CUCOL|CUROW|DATAR|LOOPC|PFKEY|SCOLS|SROWS|STEPL|TITLE|UCOMM|SLSET|COLNO|LINCT|LINNO|LINSZ|PAGNO|TVAR0|TVAR1|TVAR2|TVAR3|TVAR4|TVAR5|TVAR6|TVAR7|TVAR8|TVAR9|MSGID|MSGNO|MSGTY|MSGV1|MSGV2|MSGV3|MSGV4)/gmi,	css: 'constants' },
		/* functions */
		{ regex: new RegExp(this.getKeywords(functions), 'gmi'),					css: 'functions' },
		/* regular expression */
		{ regex: /\b( EQ | NE | LT | LE | GT | GE )\b/gmi,	css: 'keyword' },
		/* comparing string */
		{ regex: /\b( CO | CN | CA | NA | CS | NS | CP | NP )\b/gmi,	css: 'keyword' },
		/* comparing bit */
		{ regex: /\b( O | Z | M )\b/gmi,	css: 'keyword' },
		/* bit operations */
		{ regex: /\b( BIT-AND | BIT-OR | BIT-XOR | BIT-NOT )\b/gmi,	css: 'keyword' }
		]
};

SyntaxHighlighter.brushes.Abap.prototype=new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Abap.aliases=["abap"];