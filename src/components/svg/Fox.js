import PropTypes from 'prop-types';
import React from 'react';

export const Fox = ({ fillColor }) => {
  return (
    <svg width="210px" height="130px" viewBox="0 0 420 250" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0, 250) scale(0.1, -0.1)" fill={fillColor} stroke="none">
        <path d="M2996 2471 c-8 -12 3 -41 15 -41 20 0 51 -90 79 -232 17 -84 44 -217
        62 -296 17 -78 29 -144 27 -146 -4 -5 -284 -91 -393 -122 l-59 -16 24 -19 c13
        -10 40 -25 59 -34 35 -16 39 -15 195 31 202 59 204 59 209 43 2 -8 23 -75 46
        -149 23 -74 67 -202 97 -283 l54 -148 -43 -57 c-24 -31 -103 -116 -175 -188
        -128 -126 -161 -174 -110 -159 42 13 185 115 282 201 53 47 97 84 98 83 1 -2
        24 -49 50 -104 75 -154 169 -287 282 -400 135 -136 262 -202 279 -147 10 29
        -12 534 -22 544 -16 16 -37 -27 -67 -132 -34 -120 -51 -160 -67 -160 -25 0
        -110 84 -160 158 -75 111 -201 361 -190 375 110 139 222 320 222 357 0 17 -14
        40 -42 67 -51 49 -91 67 -118 53 -16 -8 -17 -14 -7 -40 9 -22 8 -41 -1 -77
        -15 -55 -104 -225 -118 -225 -24 -1 -176 465 -157 482 4 5 53 20 107 35 172
        46 206 72 146 115 -43 30 -98 28 -199 -9 -47 -17 -86 -29 -89 -27 -6 7 -51
        213 -72 334 -11 63 -20 150 -20 193 0 73 -2 79 -27 97 -57 40 -182 67 -197 43z"/>
        <path d="M3514 2171 c-52 -24 -61 -37 -38 -62 33 -36 180 -102 239 -107 65 -5
        85 7 85 52 0 38 -54 96 -112 121 -50 20 -124 19 -174 -4z"/>
        <path d="M2525 2070 c-22 -24 -82 -43 -228 -71 -94 -17 -118 -19 -154 -9 -93
        27 -126 12 -99 -45 10 -20 22 -80 28 -133 12 -111 4 -515 -12 -607 -23 -134
        -6 -281 36 -315 12 -10 18 -3 39 41 33 73 43 191 51 625 l7 352 116 16 c64 9
        130 19 147 22 43 6 92 -5 99 -25 17 -42 25 -327 14 -536 -6 -121 -11 -238 -10
        -260 2 -66 73 -186 96 -163 21 21 28 126 34 505 6 416 6 422 29 452 29 39 28
        55 -5 85 -32 29 -134 86 -155 86 -8 0 -23 -9 -33 -20z"/>
        <path d="M1710 2017 c0 -13 5 -28 11 -34 28 -28 -25 -119 -151 -263 -70 -80
        -94 -116 -85 -129 10 -18 71 14 194 102 130 93 231 185 231 209 0 28 -46 73
        -108 106 -72 38 -92 40 -92 9z"/>
        <path d="M420 1913 c0 -17 15 -58 32 -93 37 -70 154 -200 181 -200 10 0 29 11
        42 25 29 28 34 89 10 134 -30 59 -152 141 -232 157 -31 6 -33 5 -33 -23z"/>
        <path d="M1100 1925 c-19 -23 -6 -80 40 -170 37 -74 90 -145 109 -145 4 0 18
        12 32 26 54 57 10 194 -82 260 -57 41 -83 49 -99 29z"/>
        <path d="M2282 1778 c-16 -16 -15 -45 2 -51 30 -12 39 -85 33 -267 -14 -407
        -102 -673 -311 -935 -80 -100 -75 -125 11 -56 145 115 253 275 327 481 52 145
        75 280 97 572 15 199 13 208 -63 243 -60 28 -79 30 -96 13z"/>
        <path d="M1585 1540 c-107 -19 -489 -104 -558 -124 -52 -15 -56 -42 -10 -69
        32 -18 35 -18 170 1 76 11 140 18 142 16 6 -6 -15 -383 -21 -390 -8 -8 -177
        -34 -220 -34 -21 0 -38 4 -38 8 0 5 11 46 25 93 14 46 23 95 20 107 -9 36 -53
        72 -89 72 -49 0 -57 -14 -38 -68 13 -39 13 -55 3 -106 -14 -69 -30 -103 -60
        -130 -26 -24 -28 -87 -3 -136 22 -45 42 -48 85 -11 19 17 51 38 71 46 34 14
        212 65 228 65 9 0 -27 -127 -63 -222 -17 -43 -60 -122 -95 -175 -36 -53 -62
        -103 -59 -111 7 -18 8 -18 -250 58 -110 33 -215 62 -232 66 l-33 6 0 82 c-1
        139 -16 214 -57 276 -32 49 -35 57 -25 84 24 64 80 141 140 194 34 31 62 64
        62 74 0 21 -65 89 -113 118 -43 27 -64 25 -115 -10 -30 -20 -79 -37 -160 -56
        -64 -15 -121 -30 -125 -34 -4 -4 20 -20 55 -35 60 -27 65 -28 131 -17 37 7 79
        12 93 12 24 0 26 -3 21 -29 -4 -16 -24 -72 -47 -124 -22 -52 -40 -101 -40
        -108 0 -8 20 -72 44 -144 25 -71 48 -160 51 -196 l7 -65 -94 -1 c-98 -1 -327
        -29 -341 -43 -4 -4 17 -30 48 -59 68 -61 86 -63 181 -19 59 28 80 32 149 33
        76 0 96 -6 375 -102 818 -281 802 -276 877 -281 124 -8 348 39 527 111 83 33
        103 53 64 61 -13 3 -153 12 -313 21 -418 23 -582 41 -778 86 l-88 21 38 27
        c112 81 199 220 263 416 18 55 35 103 39 107 8 9 260 43 267 35 3 -3 0 -46 -6
        -96 -10 -73 -10 -94 0 -106 18 -22 26 -19 47 18 50 85 163 375 163 418 0 34
        -118 109 -171 109 -28 0 -34 -26 -14 -64 13 -24 17 -48 13 -99 -2 -36 -7 -69
        -10 -73 -5 -4 -251 -53 -274 -54 -1 0 2 17 6 38 5 20 14 93 21 161 l12 124
        -36 33 c-35 32 -35 34 -14 38 12 3 86 17 165 32 210 39 298 90 223 128 -38 20
        -109 19 -236 -4z"/>
        <path d="M2897 1453 c-13 -12 -7 -35 14 -52 17 -13 22 -32 26 -97 l6 -80 -94
        -23 c-128 -33 -127 -32 -83 -70 39 -35 48 -36 140 -16 l31 7 -9 -74 c-20 -176
        -75 -324 -179 -484 -69 -107 -78 -127 -59 -139 13 -8 130 103 180 171 82 110
        147 283 174 463 8 57 17 105 18 106 2 1 38 14 81 29 43 16 87 36 99 45 46 38
        -20 59 -119 38 l-63 -14 0 68 c0 76 -14 100 -69 118 -38 12 -84 14 -94 4z"/>
        <path d="M2390 908 c0 -14 158 -215 183 -233 37 -26 64 -19 77 20 23 70 -25
        140 -127 185 -58 26 -133 41 -133 28z"/>
      </g>
    </svg>
  );
};

Fox.propTypes = {
  fillColor: PropTypes.string.isRequired
};

export default Fox;