#!/usr/bin/env python2
# -*- coding: utf-8 -*-

from math import sqrt
import sys

def travel_time(x, a, v_top, d):
    x_acc_rec = 0.5 * v_top * v_top * (1.0 / a + 1.0 / d)
    if x_acc_rec > x:
        t_acc = sqrt(2.0 * d * x / (a * a + a * d))
        t_top = 0
        t_dec = sqrt(2.0 * a * x / (d * d + a * d))
        v_max = a * t_acc
    else:
        t_acc = 1.0 * v_top / a
        t_top = 1.0 * x / v_top - 0.5 * v_top * (a + d) / (a * d)
        t_dec = 1.0 * v_top / d
        v_max = v_top
    print "v_max = %5d km/h    (maximum speed)" % v_max
    print "t_acc = %s   (accelerating)" % format_time(t_acc)
    print "t_top = %s   (at top speed)" % format_time(t_top)
    print "t_dec = %s   (decelerating)" % format_time(t_dec)
    return t_acc + t_top + t_dec

def format_time(t):
    t = 1.0 * t
    hours = int(t)
    t -= hours
    t *= 60
    minutes = int(t)
    t -= minutes
    t *= 60
    seconds = int(t)
    return "%02dh %02dm %02ds" % (hours, minutes, seconds)

def main():
    if len(sys.argv) != 5:
        print "Usage: travel_time.py distance acceleration top-speed deceleration"
    x = int(sys.argv[1])
    a = int(sys.argv[2])
    v_max = int(sys.argv[3])
    d = int(sys.argv[4])
    print "x     = %5d km      (distance)" % x
    print "a     = %5d km/h/h  (acceleration)" % a
    print "v_max = %5d km/h    (top speed)" % v_max
    print "d     = %5d km/h/h  (deceleration)" % d
    print "-------------------------------------"
    T = travel_time(x, a, v_max, d)
    print "-------------------------------------"
    print "T     = %s   (travel time)" % format_time(T)

if __name__ == "__main__":
    main()
