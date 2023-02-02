<?php
/**
 * Plugin Name:     BMI Calc
 * Version:         1.0.0
 * Description:     Add a BMI and reverse BMI calculator to your pages and posts
 */


define('BMI_CALC_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('BMI_CALC_INCLUDE_CSS_DIR', 'public/css/');
define('BMI_CALC_INCLUDE_JS_DIR', 'public/js/');
define('BMI_CALC_INCLUDE_ASSETS_DIR', 'public/assets/');
define('BMI_CALC_CSS_FILE', 'bmicalc.css');

function mm_bmicalc_shortcode($attr =[], $content = null) {
    $assets_dir = BMI_CALC_PLUGIN_DIR.BMI_CALC_INCLUDE_ASSETS_DIR;

    ob_start();
    include_once $assets_dir.'bmi_input.php';
    $buf = ob_get_contents();
    ob_end_clean();
        
    return $buf;
}

add_shortcode('bmicalc', 'mm_bmicalc_shortcode');

function add_bmicalc_css() {
    $css_file = plugins_url(BMI_CALC_INCLUDE_CSS_DIR.BMI_CALC_CSS_FILE, __FILE__);
    wp_enqueue_style('bmicalc-css', $css_file);
}

add_action('wp_enqueue_scripts', 'add_bmicalc_css');
?>