jQuery(document).ready(function($) {
    $('#bmi_calc_tabs').tabs();
    $('#reverse_bmi_calc_tabs').tabs();
    $(".widget button").button();

    // temp initilalize inputs for testing
    //$('#height').val('176');
    //$('#weight').val('70');
    //$('#bmi').val(35);

    $('#bmicalc_metric').click(onBmiCalcMetric);
    $('#bmicalc_english').click(onBmiCalcEnglish);
    $('#r_bmicalc_metric').click(onReverseBmiCalcMetric);
    $('#r_bmicalc_english').click(onReverseBmiCalcEnglish);

    function roundTo(n, d) {
        return Number(n.toFixed(d));
    }

    function copyToClipboard(text) {
        const $temp = $("<input>");
        $("body").append($temp);
        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
    }
      
    /**
     * 
     * @param {height in meters} height 
     * @param {weight in kg} weight 
     * @returns bmi rounded to 1 decimal
     */
    function calculateBMI(height, weight) {
        var bmi = weight / (height * height);
        console.log(bmi);
        return Number(bmi.toFixed(1));
      }

    function onBmiCalcMetric() {
        var h = parseFloat($('#height_metric').val())/100;
        var w = parseFloat($('#weight_metric').val());

        $('#bmi_metric').html(calculateBMI(h, w));
    }
    
    function feetAndInchesToMeters(feet, inches) {
        if (isNaN(feet) || isNaN(inches) || feet < 0 || inches < 0) {
          throw new Error("Invalid input. Feet and inches must be positive numbers.");
        }
        return ((feet * 12 + inches) * 2.54 / 100).toFixed(2);
    }
     
     
    function onBmiCalcEnglish() {
        var feet = parseFloat($('#height_ft').val());
        var inches = parseFloat($('#height_in').val());

        var h = feetAndInchesToMeters(feet, inches);

        var w = parseFloat($('#weight_lb').val())/2.2;

        $('#bmi_english').html(calculateBMI(h, w));
    }

    /**
     * 
     * @param {height in m} h 
     * @param {bmi} bmi 
     * @returns weight for given bmi and height rounded to 1 decimal
     */
    function calcReverseBmi(h, bmi) {
        var w = bmi*h*h;
        return Number(w.toFixed(1));
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

    function onReverseBmiCalcMetric() {
        var h = parseFloat($('#r_height_metric').val())/100;
        var bmi = parseFloat($('#r_bmi_metric').val());

        var w  = calcReverseBmi(h, bmi);

        var msg = 'For target BMI of '+bmi+', aim for weight of '+roundTo(w, 1)+' kg';

        copyToClipboard(msg);

        $('#r_weight_metric').html(w+' kg');
    }

    function onReverseBmiCalcEnglish() {
        var feet = parseFloat($('#r_height_ft').val());
        var inches = parseFloat($('#r_height_in').val());

        var h = feetAndInchesToMeters(feet, inches);

        var bmi = parseFloat($('#r_bmi_english').val());

        var w  = calcReverseBmi(h, bmi)*2.2;

        var msg = 'For target BMI of '+bmi+', aim for weight of '+roundTo(w, 1)+' lb';

        copyToClipboard(msg);

        $('#r_weight_english').html(roundTo(w, 1)+' lb');

    }
});