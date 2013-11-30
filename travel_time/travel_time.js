function travel_time(x, a, v_top, d, result_callback) {
    x_acc_rec = 0.5 * v_top * v_top * (1.0 / a + 1.0 / d);
    if (x_acc_rec > x) {
        t_acc = Math.sqrt(2.0 * d * x / (a * a + a * d));
        t_top = 0
        t_dec = Math.sqrt(2.0 * a * x / (d * d + a * d));
        v_max = a * t_acc;
    } else {
        t_acc = 1.0 * v_top / a;
        t_top = 1.0 * x / v_top - 0.5 * v_top * (a + d) / (a * d);
        t_dec = 1.0 * v_top / d;
        v_max = v_top;
    }
    T = t_acc + t_top + t_dec;
    result_callback(v_max, t_acc, t_top, t_dec, T);
    return T;
}
