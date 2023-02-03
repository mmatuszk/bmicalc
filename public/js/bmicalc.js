jQuery(document).ready(function() {
    jQuery(".widget button").button();

    // temp initilalize inputs for testing
    //jQuery('#height').val('176');
    //jQuery('#weight').val('70');

    jQuery('#bmicalc').click(on_bmi_calc);

    /**
     * 
     * @param {height in meters} h 
     * @param {weight} w 
     * @returns bmi
     */
    function calc_bmi(h, w) {
        return w / h / h;
    }

    function on_bmi_calc() {
        var h = parseFloat(jQuery('#height').val())/100;
        var w = parseFloat(jQuery('#weight').val());

        var bmi = calc_bmi(h, w);

        var round_bmi = Math.round((bmi + Number.EPSILON)*10) / 10;

        jQuery('#bmi').html(round_bmi);
    }
});