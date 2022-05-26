import PropTypes from 'prop-types';
import React from 'react';

export const Panda = ({ fillColor }) => (
  <svg width="210px" height="130px" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0, 225) scale(0.1, -0.1)" fill={fillColor} stroke="none">
      <path d="M3054 2125 c-4 -8 0 -23 7 -32 11 -13 13 -67 11 -269 -3 -260 3 -320
        36 -358 51 -57 193 -85 340 -67 105 13 210 43 243 70 24 19 24 19 7 67 -10 27
        -23 82 -29 122 -21 127 -57 135 -79 18 -16 -85 -40 -122 -87 -136 -58 -16
        -154 -23 -217 -16 -80 10 -105 34 -112 111 l-6 60 75 22 c118 35 279 101 312
        127 29 24 29 26 15 52 -23 42 -98 96 -129 92 -23 -3 -27 -9 -31 -48 -4 -39
        -11 -49 -52 -80 -26 -19 -78 -52 -115 -72 l-68 -37 6 88 c3 48 12 117 19 154
        16 78 10 88 -63 125 -52 26 -75 28 -83 7z"
      />
      <path d="M2540 2078 c0 -41 -8 -69 -35 -122 -88 -170 -248 -367 -336 -412 -26
        -13 -50 -28 -54 -34 -12 -19 6 -68 39 -106 l34 -39 73 37 c73 37 155 63 423
        133 l139 37 46 -46 c26 -25 52 -46 59 -46 30 0 58 90 46 148 -9 46 -75 116
        -132 140 -59 26 -122 36 -140 24 -16 -11 -2 -44 50 -119 17 -26 24 -43 16 -43
        -6 0 -95 -12 -195 -27 -116 -16 -187 -23 -193 -17 -11 11 54 95 198 255 113
        126 128 150 112 188 -14 34 -99 101 -129 101 -19 0 -21 -6 -21 -52z"
      />
      <path d="M1725 2039 c-4 -5 5 -27 19 -48 19 -28 26 -50 26 -87 0 -46 -27 -234
        -34 -242 -5 -5 -324 -62 -347 -62 -17 0 -19 9 -19 84 0 123 -6 144 -50 166
        -61 31 -127 44 -156 32 -31 -15 -31 -35 1 -56 14 -10 31 -29 36 -44 16 -41 40
        -195 31 -203 -4 -4 -59 -14 -122 -23 -121 -17 -141 -26 -121 -50 23 -28 81
        -39 173 -34 84 5 88 4 92 -16 3 -11 11 -66 19 -121 11 -71 20 -103 33 -112 40
        -29 53 23 63 258 1 12 28 19 135 33 73 9 150 19 170 23 47 7 47 1 -4 -148 -40
        -116 -48 -159 -32 -159 5 0 16 8 24 18 26 29 117 193 140 253 l22 56 155 27
        c203 33 246 46 246 71 0 14 -15 27 -45 43 -52 26 -139 29 -240 8 -36 -8 -66
        -13 -68 -11 -1 1 13 46 33 100 42 116 45 162 11 194 -46 43 -175 77 -191 50z"
      />
      <path d="M785 1970 c-3 -6 -3 -29 0 -53 8 -51 -9 -100 -72 -207 -74 -126 -59
        -123 -160 -35 -48 42 -107 87 -129 100 -51 30 -124 44 -124 24 0 -8 62 -76
        137 -151 l137 -137 -130 -133 c-133 -136 -172 -183 -160 -196 12 -12 108 46
        215 131 157 124 138 116 160 66 11 -24 25 -65 32 -91 l13 -47 -50 -73 c-95
        -140 -208 -274 -372 -440 -90 -92 -161 -172 -157 -177 10 -17 88 28 220 127
        135 101 230 190 325 306 l65 79 8 -59 c15 -106 -7 -389 -39 -501 -22 -80 -47
        -87 -165 -49 -69 23 -99 24 -99 5 0 -4 24 -36 53 -70 85 -101 91 -110 107
        -178 21 -86 39 -90 104 -24 109 110 148 218 166 460 25 322 -13 577 -114 768
        l-43 81 64 69 c64 68 176 226 188 264 18 56 -151 188 -180 141z"
      />
      <path d="M2649 1365 c-14 -8 -73 -23 -130 -35 -84 -17 -111 -19 -146 -11 -75
        19 -70 36 -69 -216 1 -210 -1 -238 -26 -357 l-27 -128 24 -47 c26 -52 49 -76
        64 -67 12 8 26 76 41 201 7 55 14 102 17 104 2 3 51 8 109 12 121 7 150 21
        113 55 -18 16 -36 19 -120 18 l-99 0 0 50 c0 28 4 56 8 62 4 7 34 15 67 19 72
        9 135 32 135 50 0 31 -102 42 -177 19 -23 -6 -23 -5 -23 74 l0 80 98 12 c132
        16 170 12 196 -23 20 -27 21 -40 21 -277 0 -137 -3 -252 -7 -256 -4 -4 -38 -8
        -75 -8 -38 -1 -70 -5 -72 -11 -3 -5 21 -27 52 -48 39 -27 62 -52 76 -83 25
        -52 46 -56 85 -18 43 44 48 81 53 386 5 266 6 288 24 304 26 24 24 35 -13 71
        -84 78 -143 98 -199 68z"
      />
      <path d="M3077 1323 c-12 -11 -8 -40 7 -52 21 -18 26 -59 36 -299 5 -122 14
        -240 20 -261 28 -106 135 -155 340 -156 89 0 118 4 192 28 49 16 96 39 108 52
        l22 23 -21 84 c-11 45 -25 109 -31 140 -10 51 -24 77 -35 66 -2 -2 -15 -48
        -30 -103 -32 -128 -53 -150 -150 -160 -85 -10 -199 2 -251 24 -54 24 -74 67
        -74 158 l0 70 105 28 c118 31 288 111 293 137 2 11 -15 29 -51 53 -83 55 -158
        59 -125 6 10 -17 9 -23 -7 -42 -20 -21 -146 -89 -194 -104 l-24 -7 7 83 c4 46
        12 103 17 126 5 23 6 49 3 57 -13 33 -135 72 -157 49z"
      />
      <path d="M1910 1236 c-59 -32 -422 -92 -626 -103 -71 -4 -134 -1 -176 7 -79
        14 -108 8 -108 -25 0 -13 4 -27 10 -30 22 -14 41 -124 60 -360 23 -277 33
        -347 55 -382 26 -39 65 -23 65 28 0 22 5 28 33 33 56 10 368 35 471 38 l98 3
        30 -56 c17 -31 33 -81 36 -110 9 -71 29 -75 89 -17 53 52 86 104 113 182 24
        72 64 277 80 411 18 152 29 201 50 220 31 28 25 41 -37 83 -127 86 -190 106
        -243 78z m41 -125 c22 -18 24 -28 27 -128 6 -178 -36 -442 -74 -470 -25 -18
        -65 -16 -105 4 -23 12 -64 19 -126 21 l-93 4 0 119 c0 65 3 119 6 119 27 0
        261 53 271 62 10 8 11 14 1 25 -36 44 -112 54 -211 28 -71 -18 -66 -19 -62 3
        2 9 6 38 9 65 5 44 3 50 -29 86 l-35 38 178 20 c228 26 216 26 243 4z m-490
        -156 l4 -100 -75 -6 c-91 -8 -140 -18 -140 -29 0 -21 15 -41 44 -59 29 -18 39
        -19 100 -10 37 6 70 9 72 6 2 -2 5 -55 7 -118 l2 -114 -138 -14 c-76 -7 -140
        -12 -142 -9 -2 2 -7 125 -11 274 l-7 270 134 15 c90 10 136 11 140 4 4 -5 8
        -55 10 -110z"
      />
      <path d="M2200 440 c0 -25 -86 -184 -121 -224 -22 -24 -39 -52 -39 -63 0 -30
        48 -123 63 -123 24 0 107 97 135 158 32 70 36 177 9 230 -16 30 -47 45 -47 22z"
      />
      <path d="M3014 435 c-20 -52 115 -275 167 -275 16 0 32 29 45 82 13 59 -65
        156 -159 196 -36 16 -46 15 -53 -3z"
      />
      <path d="M3461 421 c-22 -14 1 -42 110 -132 126 -104 237 -184 268 -194 l23
        -7 -3 83 c-5 98 -24 133 -98 181 -88 55 -259 95 -300 69z"
      />
      <path d="M2582 392 c7 -24 111 -190 146 -232 29 -34 31 -34 49 -17 31 27 45
        87 32 128 -25 73 -118 139 -196 139 -29 0 -34 -3 -31 -18z"
      />
    </g>
  </svg>
);

Panda.propTypes = {
  fillColor: PropTypes.string.isRequired,
};

export default Panda;