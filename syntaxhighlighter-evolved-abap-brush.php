<?php
/*
Plugin Name: SyntaxHighlighter Evolved: ABAP Brush
Plugin URI: http://www.fanninger.at/
Description: Adds <strong>ABAP</strong> support to the SyntaxHighlighter Evolved plugin
Author: fanningert
Version: 0.3
Author URI: http://www.fanninger.at/
License: GPLv2
*/
 
add_action( 'init', 'syntaxhighlighter_abapbrush_regscript' );
 
// Tell SyntaxHighlighter Evolved about this new language/brush
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_abapbrush_addlang' );
 
// Register the brush file with WordPress
function syntaxhighlighter_abapbrush_regscript() {
    wp_register_script( 'syntaxhighlighter-brush-abap', plugins_url( 'shBrushAbap.js', __FILE__ ), array('syntaxhighlighter-core'), '1.0.0' );
}
 
// Filter SyntaxHighlighter Evolved's language array
function syntaxhighlighter_abapbrush_addlang( $brushes ) {
    $brushes['abap'] = 'abap';
    return $brushes;
}
 
?>