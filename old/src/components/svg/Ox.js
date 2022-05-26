import PropTypes from 'prop-types';
import React from 'react';

export const Ox = ({ fillColor }) => (
  <svg width="130px" height="130px" viewBox="0 0 545 760" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0, 760) scale(0.1, -0.1)" fill={fillColor} stroke="none">
      <path d="M2780 7588 c-52 -9 -95 -49 -87 -82 3 -12 20 -61 38 -111 l34 -90 -2
        -335 c-1 -184 -7 -387 -13 -450 -10 -108 -9 -120 12 -191 22 -72 23 -87 15
        -240 -4 -90 -5 -198 -2 -240 l6 -76 -36 -31 c-23 -21 -46 -32 -66 -32 -37 0
        -162 -41 -229 -75 l-49 -25 -19 33 c-11 17 -33 61 -50 97 -46 98 -106 175
        -170 219 -66 45 -109 89 -145 147 -40 64 -187 168 -272 192 -138 39 -415 160
        -415 182 0 16 -26 12 -41 -6 -11 -13 -9 -23 10 -59 13 -24 38 -61 56 -82 36
        -43 60 -92 69 -142 5 -30 49 -100 113 -180 18 -23 22 -42 24 -136 l3 -110 -56
        -145 c-81 -208 -80 -207 -76 -370 2 -111 7 -152 19 -175 9 -16 29 -61 43 -100
        15 -38 34 -79 44 -91 28 -34 146 -65 212 -56 88 11 332 -16 386 -44 28 -15 33
        -15 70 3 21 11 82 33 134 48 52 15 102 29 111 32 11 3 20 -6 29 -27 12 -28 11
        -33 -2 -41 -29 -16 -284 -213 -458 -354 -96 -78 -227 -172 -290 -210 -63 -38
        -188 -115 -278 -172 -96 -60 -200 -117 -250 -137 -48 -19 -130 -53 -182 -76
        -52 -22 -187 -70 -300 -106 -113 -35 -252 -81 -310 -103 -58 -21 -143 -46
        -190 -54 -96 -18 -122 -34 -167 -101 -42 -61 -56 -117 -49 -186 31 -310 32
        -313 68 -385 48 -94 91 -151 129 -170 25 -14 39 -14 80 -6 28 6 84 11 126 11
        75 0 77 1 187 64 61 36 134 74 163 85 29 11 87 38 130 59 43 22 110 51 148 65
        39 13 111 43 161 66 51 23 98 41 106 41 8 0 39 13 69 29 82 44 203 92 419 165
        214 73 304 107 365 138 64 32 404 148 435 148 31 0 70 -33 70 -59 0 -9 -5
        -137 -10 -286 -7 -183 -7 -528 0 -1070 14 -1091 20 -1221 80 -1685 48 -367 64
        -446 97 -482 35 -39 56 -24 122 86 34 57 40 74 35 102 -5 27 -3 34 9 34 11 0
        16 14 20 47 6 62 30 167 62 268 16 53 34 155 50 300 14 121 37 290 51 375 14
        85 32 254 40 375 21 327 62 771 84 903 11 64 20 161 20 215 0 60 9 149 24 230
        14 73 30 206 36 297 6 91 13 173 16 183 3 10 -4 58 -16 108 -20 87 -20 92 -4
        110 10 11 41 26 69 34 48 14 87 13 526 -19 385 -29 497 -40 594 -62 66 -14
        158 -29 205 -33 47 -4 105 -13 130 -19 25 -6 106 -16 181 -23 178 -14 201 -8
        291 79 37 36 68 70 68 75 0 24 -171 325 -201 352 -17 17 -46 53 -65 81 -29 46
        -128 142 -208 202 -32 25 -91 29 -165 11 -25 -5 -88 -11 -140 -13 -89 -3 -196
        -22 -361 -64 -37 -9 -107 -16 -165 -17 -55 0 -224 -9 -376 -19 -152 -10 -288
        -16 -302 -12 -16 4 -33 19 -43 38 -15 28 -15 50 -5 202 6 94 11 230 10 301 -1
        72 4 149 10 172 8 31 41 74 133 174 125 138 135 147 179 148 14 1 52 18 85 39
        32 21 82 46 109 56 29 11 67 36 90 60 82 84 86 192 14 411 -21 65 -63 104 -97
        90 -9 -4 -73 -11 -142 -16 -69 -5 -152 -12 -185 -15 -33 -2 -80 -1 -105 3 -61
        11 -80 48 -80 158 0 44 -5 130 -11 190 -13 134 3 381 33 525 45 212 24 290
        -149 564 -35 55 -68 117 -73 138 -8 26 -20 43 -40 53 -16 9 -46 29 -65 47 -33
        28 -39 30 -83 23 -61 -10 -103 -8 -166 8 -33 9 -67 10 -96 5z m-130 -3183 c40
        -48 12 -179 -54 -252 -40 -43 -45 -45 -151 -68 -180 -38 -205 -44 -311 -65
        -109 -22 -450 -116 -661 -182 -73 -23 -136 -39 -139 -35 -16 16 63 90 135 128
        42 22 95 54 118 71 40 29 44 30 92 21 l50 -10 92 58 c51 33 109 62 128 65 20
        4 55 20 79 36 67 46 190 100 382 168 96 34 182 66 190 71 22 12 36 11 50 -6z
        m-1831 -706 c38 -13 38 -18 4 -51 -56 -52 -135 -86 -263 -113 -69 -15 -145
        -33 -170 -40 -51 -16 -60 -13 -60 19 0 41 31 63 130 92 52 15 127 40 165 57
        39 16 88 33 110 37 22 4 43 8 46 9 3 0 20 -4 38 -10z"
      />
    </g>
  </svg>
);

Ox.propTypes = {
  fillColor: PropTypes.string.isRequired,
};

export default Ox;