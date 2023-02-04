jQuery(document).ready(function($) {
    $('#bmi_calc_tabs').tabs();
    $(".widget button").button();

    // temp initilalize inputs for testing
    //$('#height').val('176');
    //$('#weight').val('70');
    //$('#bmi').val(35);

    $('#bmicalc').click(on_bmi_calc);
    $('#reversebmicalc').click(on_reverse_bmi_calc);

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
        var h = parseFloat($('#height').val())/100;
        var w = parseFloat($('#weight').val());

        var bmi = calc_bmi(h, w);

        var round_bmi = Math.round((bmi + Number.EPSILON)*10) / 10;

        $('#bmi').html(round_bmi);
    }

    /**
     * 
     * @param {height in m} h 
     * @param {bmi} bmi 
     * @returns weight for given bmi and height
     */
    function calc_reverse_bmi(h, bmi) {
        return bmi*h*h;
    }

    function on_reverse_bmi_calc() {
        var h = parseFloat($('#height').val())/100;
        var bmi = parseFloat($('#bmi').val());

        var w_kg = calc_reverse_bmi(h, bmi);
        var w_lb = w_kg*2.2;

        var round_w_kg = Math.round((w_kg + Number.EPSILON)*10) / 10;
        var round_w_lb = Math.round((w_lb + Number.EPSILON)*10) / 10;

        $('#weight').html(round_w_kg+' kg'+' ('+round_w_lb+' lb)');
    }
});