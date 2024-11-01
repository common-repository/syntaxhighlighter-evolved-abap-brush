=== SyntaxHighlighter Evolved: ABAP Brush ===
Contributors: fanningert
Tags: code, sourcecode, php, xhtml, html, css, highlight, syntax, abap, SyntaxHighlighter Evolved
Requires at least: 3.1
Tested up to: 3.1
Stable tag: 0.2

This is a Advanced Business Application Programming (ABAP) brush for the "SyntaxHighlighter Evolved" plugin.

== Description ==

It is a brush designed to work with the [SyntaxHighlighter Evolved](http://wordpress.org/extend/plugins/syntaxhighlighter/) WordPress plugin (written by Viper), itself based on the SyntaxHighlighter JavaScript package by Alex Gorbatchev. To be able to use this brush, you will need the SyntaxHighlighter Evolved plugin installed.

To highlight your ABAP code, simply wrap it between `[abap]` and `[/abap]` tags.

> **INFO:** When you found a that a keyword or a other special word of abap is not highlighted. Please write entry into the forum of this plugin. -> <a href="http://wordpress.org/tags/syntaxhighlighter-evolved-abap-brush?forum_id=10" title="Wordpress Support Forum">Support Forum</a>

= Current language support =

* Comments
* Strings
* ABAP system fields
* ABAP functions like 'strlen'

== Installation ==

= Uploading The Plugin =

Extract all files from the ZIP file, making sure to keep the file/folder structure intact, and then upload it to `/wp-content/plugins/`.

= Plugin Usage =

Make sure you have the "SyntaxHighlighter Evolved" plugin installed first!

Wrap your ABAP code between `[abap]` and `[/abap]`.

== Frequently Asked Questions ==

= How can I add instructions to the brush? =

By editing the `shBrushAbap.js` file.

== Screenshots ==

1. Brush in action (version 0.1)

== Changelog ==

= 0.3 =

* Add: Support for ABAP comparing functions Example: EQ, NE, ...

= 0.2 =

* Add: Support for ABAP system fields (highlight as constants)
* Add: Support for ABAP functions like 'strlen'

= 0.1 =

Initial release.

== Upgrade Notice ==