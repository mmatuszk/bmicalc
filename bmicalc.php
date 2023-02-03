<?php
/**
 * Plugin Name:     BMI Calc
 * Version:         1.0.3
 * Description:     Add a BMI and reverse BMI calculator to your pages and posts
 */



define('BMI_CALC_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('BMI_CALC_CSS_DIR', 'public/css/');
define('BMI_CALC_JS_DIR', 'public/js/');
define('BMI_CALC_ASSETS_DIR', 'public/assets/');
define('BMI_CALC_ASSET_FILE', 'bmi_input.php');
define('BMI_CALC_CSS_FILE', 'bmicalc.css');
define('BMI_CALC_JS_FILE', 'bmicalc.js');
define('REVERSE_BMI_CALC_ASSET_FILE', 'reverse_bmi_input.php');

function mm_bmicalc_shortcode($attr =[], $content = null) {
    $assets_dir = BMI_CALC_PLUGIN_DIR.BMI_CALC_ASSETS_DIR;

    ob_start();
    include_once $assets_dir.BMI_CALC_ASSET_FILE;
    $buf = ob_get_contents();
    ob_end_clean();
        
    return $buf;
}

add_shortcode('bmic_calc', 'mm_bmicalc_shortcode');

function mm_reverse_bmicalc_shortcode($attr =[], $content = null) {
    $assets_dir = BMI_CALC_PLUGIN_DIR.BMI_CALC_ASSETS_DIR;

    ob_start();
    include_once $assets_dir.REVERSE_BMI_CALC_ASSET_FILE;
    $buf = ob_get_contents();
    ob_end_clean();
        
    return $buf;
}

add_shortcode('reverse_bmi_calc', 'mm_reverse_bmicalc_shortcode');

function add_bmicalc_css() {
    wp_enqueue_style('bmicalc-css', plugins_url(BMI_CALC_CSS_DIR.BMI_CALC_CSS_FILE, __FILE__));

    $css_file = plugins_url(BMI_CALC_CSS_DIR.'jquery-ui.css', __FILE__);
    wp_enqueue_style('bmicalc-jquery-ui', $css_file);
}

add_action('wp_enqueue_scripts', 'add_bmicalc_css');

function add_bmicalc_js() {
    wp_enqueue_script('jquery');
    wp_enqueue_script('jquery-ui');
    wp_enqueue_script('jquery-ui-button');
    wp_enqueue_script('bmicalc', plugins_url(BMI_CALC_JS_DIR.BMI_CALC_JS_FILE, __FILE__));
}

add_action('wp_enqueue_scripts', 'add_bmicalc_js');
?>