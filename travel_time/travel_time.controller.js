function getval(variable) {
    return parseInt($('#' + variable).attr('value'));
}

function setval(variable, value) {
    $('#' + variable).attr('value', value);
}

function format_velocity(v) {
    return parseInt(v) + " km/h";
}

function format_time(t) {
    t = 1.0 * t;
    hours = parseInt(t);
    t -= hours;
    t *= 60;
    minutes = parseInt(t);
    t -= minutes;
    t *= 60;
    seconds = parseInt(t);
    return (hours < 10 ? "0" + hours : hours) + "h " +
           (minutes < 10 ? "0" + minutes : minutes) + "m " +
           (seconds < 10 ? "0" + seconds : seconds) + "s";
}

function update_results(v_max, t_acc, t_top, t_dec, T) {
    $('#v_max').html(format_velocity(v_max));
    $('#t_acc').html(format_time(t_acc));
    $('#t_top').html(format_time(t_top));
    $('#t_dec').html(format_time(t_dec));
    $('#T').html(format_time(T));
}

function calculate() {
    a = getval('acc');
    d = getval('dec');
    v_top = getval('v_top');
    x = getval('x');
    travel_time(x, a, v_top, d, update_results);
}

function load() {
    $('#acc').change(calculate);
    $('#dec').change(calculate);
    $('#v_top').change(calculate);
    $('#x').change(calculate);
    calculate();
}

$(document).ready(load);
