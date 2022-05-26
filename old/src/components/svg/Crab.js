import PropTypes from 'prop-types';
import React from 'react';

export const Crab = ({ fillColor }) => (
  <svg width="210px" height="130px" viewBox="0 0 430 238" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0, 238) scale(0.1, -0.1)" fill={fillColor} stroke="none">
      <path d="M1364 2316 c-4 -16 5 -42 28 -82 l33 -59 3 -202 c2 -112 2 -203 0
        -203 -2 0 -46 -10 -98 -21 -52 -12 -149 -24 -214 -28 -83 -4 -121 -10 -124
        -19 -2 -7 12 -28 31 -47 43 -43 55 -44 253 -10 81 14 149 25 151 25 2 0 3 -56
        3 -124 l0 -123 -104 -17 c-58 -9 -145 -16 -194 -16 -113 0 -127 -11 -91 -73
        23 -41 24 -47 23 -262 0 -180 -4 -243 -22 -348 -31 -177 -29 -216 14 -335 31
        -85 52 -39 84 193 18 124 24 225 27 446 l5 286 118 21 c65 12 123 22 130 22 7
        0 10 -27 8 -86 l-3 -86 -92 -29 c-51 -17 -93 -34 -93 -39 0 -5 19 -19 41 -31
        41 -20 54 -21 123 -3 l26 6 0 -94 0 -93 -80 -29 c-45 -16 -91 -37 -103 -47
        -22 -19 -22 -19 -3 -34 22 -17 81 -19 141 -5 22 5 40 8 42 7 1 -1 6 -87 12
        -191 10 -192 20 -232 47 -204 20 20 32 97 40 265 6 128 9 153 23 157 9 3 36
        10 61 16 106 27 180 52 180 61 0 5 -15 19 -32 30 -29 18 -45 20 -125 16 l-93
        -4 0 87 0 86 81 24 c44 12 90 31 102 40 l21 17 -28 18 c-29 19 -92 24 -138 12
        l-28 -7 0 84 0 83 136 19 c96 13 141 15 152 8 25 -16 49 -97 62 -214 14 -130
        26 -582 16 -634 l-7 -39 -57 7 c-31 4 -74 9 -94 12 -57 9 -49 -15 30 -99 54
        -57 74 -87 96 -145 15 -39 34 -72 41 -72 15 0 64 59 88 105 51 101 58 298 27
        731 -12 154 -18 290 -15 304 3 14 13 39 22 57 15 27 15 34 2 49 -19 23 -102
        61 -165 75 -45 10 -55 9 -92 -10 -35 -18 -210 -71 -234 -71 -5 0 -8 56 -8 124
        l0 123 58 11 c180 35 257 45 442 55 l205 12 0 25 c0 20 -10 30 -56 53 -89 44
        -137 45 -364 2 -110 -21 -219 -43 -242 -50 l-42 -13 6 142 c3 77 11 173 19
        211 18 92 18 101 -8 125 -34 32 -123 70 -162 70 -29 0 -37 -4 -42 -24z"
      />
      <path d="M2533 2310 c-27 -11 -30 -32 -7 -51 37 -31 -21 -173 -147 -363 -71
        -106 -77 -120 -58 -131 22 -14 143 97 212 196 14 19 96 40 210 54 53 7 57 6
        57 -13 0 -19 -123 -232 -141 -243 -6 -3 -64 -14 -130 -24 -100 -15 -129 -17
        -165 -7 -88 24 -88 24 -78 -75 28 -271 -13 -485 -126 -657 -60 -92 -83 -136
        -76 -144 23 -22 167 125 218 225 68 131 95 245 105 444 l6 127 51 6 c28 4 68
        10 89 13 l37 6 0 -76 c0 -85 4 -81 -92 -92 -32 -3 -61 -11 -64 -17 -4 -6 7
        -24 25 -40 33 -29 46 -31 114 -12 15 5 17 -3 17 -64 l0 -70 -50 -11 c-28 -6
        -59 -11 -68 -11 -9 0 -24 -5 -32 -10 -12 -7 -11 -13 10 -35 23 -25 29 -26 81
        -21 l56 7 7 -62 c3 -34 6 -83 6 -108 0 -54 9 -91 21 -91 5 0 16 12 26 27 13
        19 19 55 23 137 l5 110 76 12 c178 27 188 93 12 81 l-83 -6 0 68 0 68 62 7
        c88 10 130 30 126 58 -3 22 -7 23 -92 23 l-88 -1 7 71 c4 38 8 71 10 73 1 2
        44 8 94 15 88 11 92 10 112 -10 16 -16 23 -40 30 -100 15 -146 6 -429 -14
        -449 -4 -4 -28 -3 -54 3 -83 19 -92 2 -33 -60 23 -23 43 -53 46 -67 10 -46 13
        -50 42 -50 49 0 104 75 117 160 3 25 9 152 13 282 7 203 10 239 25 256 30 33
        21 59 -40 106 -67 53 -96 63 -129 41 -22 -14 -172 -51 -179 -43 -5 5 215 201
        256 228 21 14 39 32 39 41 0 22 -66 88 -104 104 -34 15 -50 11 -88 -20 -26
        -22 -115 -49 -191 -59 -42 -5 -43 -10 15 77 50 73 48 101 -7 138 -46 32 -90
        42 -122 29z"
      />
      <path d="M613 2269 c-20 -20 -15 -45 13 -78 43 -51 54 -109 61 -317 l6 -192
        -112 -26 c-62 -15 -158 -36 -214 -47 -55 -10 -105 -23 -110 -28 -29 -29 54
        -81 130 -81 26 0 102 11 168 25 66 14 123 25 127 25 5 0 8 -69 8 -154 l0 -153
        -197 -131 c-252 -165 -294 -189 -373 -204 -62 -12 -65 -14 -68 -44 -5 -50 99
        -154 153 -154 9 0 75 58 148 128 73 71 175 166 227 211 l95 83 3 -78 c3 -83
        -13 -389 -24 -443 -9 -42 -34 -47 -125 -26 -105 23 -108 10 -17 -77 63 -61 79
        -84 98 -136 13 -34 27 -65 32 -68 14 -9 52 31 82 86 53 98 61 163 59 516 l-2
        321 65 64 c35 35 64 67 64 71 0 16 -27 7 -73 -22 -26 -16 -50 -30 -53 -30 -2
        0 -3 59 -2 131 3 146 -3 133 86 170 35 14 58 31 67 49 21 41 2 53 -80 48 l-65
        -3 0 45 c0 92 21 268 42 342 19 72 20 79 5 102 -34 52 -195 106 -224 75z"
      />
      <path d="M1771 2196 c-9 -11 -3 -24 27 -63 38 -48 150 -153 162 -153 15 0 39
        37 49 75 17 61 -9 104 -79 132 -63 26 -142 30 -159 9z"
      />
      <path d="M3760 2160 c-14 -11 -57 -26 -95 -34 -61 -13 -132 -22 -412 -52 -29
        -3 -53 -9 -53 -14 0 -4 13 -22 29 -39 32 -34 45 -36 135 -21 33 5 62 8 64 6 7
        -7 -35 -93 -69 -143 -19 -26 -72 -91 -119 -143 -48 -52 -92 -105 -99 -117 -20
        -39 19 -28 101 26 104 70 200 161 251 239 56 85 62 105 42 135 l-16 25 98 12
        c54 7 114 11 133 9 32 -4 35 -7 38 -37 4 -37 -22 -117 -48 -153 -18 -23 -18
        -23 -64 -5 -45 17 -76 16 -76 -2 0 -5 18 -30 40 -55 24 -26 40 -55 40 -70 0
        -36 21 -50 55 -37 79 30 129 95 171 224 19 58 37 90 61 113 18 17 33 34 33 37
        0 23 -160 117 -197 115 -10 0 -29 -9 -43 -19z"
      />
      <path d="M3523 1674 c-17 -7 -16 -25 2 -60 16 -31 20 -80 8 -87 -5 -3 -27 -8
        -50 -12 l-43 -7 6 31 c6 29 4 32 -47 56 -30 14 -59 25 -65 25 -18 0 -37 -27
        -24 -35 21 -13 9 -51 -44 -135 -110 -172 -98 -197 40 -82 58 49 65 51 145 61
        46 6 87 11 90 11 4 0 9 -33 11 -74 l3 -75 -30 -5 c-76 -13 -258 -36 -340 -42
        l-89 -6 34 -29 c60 -50 87 -53 261 -30 86 12 159 21 161 21 3 0 8 -53 12 -118
        3 -65 10 -133 15 -150 11 -36 11 -36 -22 -21 -19 9 -31 7 -56 -5 -28 -15 -124
        -32 -277 -50 l-51 -6 -6 41 c-3 22 -13 49 -22 59 -21 23 -97 44 -129 36 -35
        -9 -43 -43 -17 -67 12 -11 21 -26 21 -34 0 -7 3 -20 6 -28 8 -21 -8 -24 -174
        -38 -138 -11 -146 -10 -213 11 -37 12 -75 20 -84 16 -22 -8 -19 -40 10 -96 14
        -28 37 -99 51 -158 39 -161 65 -197 98 -134 15 28 17 29 123 36 59 3 129 9
        156 13 l47 6 0 -90 0 -90 -212 -31 c-289 -44 -340 -48 -389 -32 -83 28 -97
        -26 -26 -98 68 -68 66 -68 388 5 284 64 629 136 704 147 l40 5 109 -124 c109
        -125 130 -141 164 -130 19 5 42 63 42 104 0 69 -120 205 -228 260 -60 30 -153
        61 -184 61 -25 0 -23 -15 11 -64 l30 -43 -147 -17 c-81 -9 -157 -20 -169 -23
        -23 -5 -23 -3 -23 81 0 75 2 86 18 86 18 0 258 25 350 36 49 6 82 24 82 44 0
        5 -10 18 -22 30 l-22 20 51 49 c28 27 61 51 74 53 12 2 27 11 33 21 11 19 -8
        42 -77 92 -27 20 -28 21 -12 53 11 21 19 76 24 162 5 72 10 133 13 135 2 2 89
        9 194 15 234 14 258 18 262 47 4 29 -60 63 -132 70 -44 5 -233 -16 -303 -34
        -22 -5 -23 -3 -23 70 l0 74 110 17 c173 27 193 38 138 79 -29 22 -82 26 -174
        14 l-61 -8 -6 42 c-3 23 -12 48 -19 56 -15 14 -104 27 -125 17z m-41 -919 c-2
        -23 -14 -57 -30 -80 -27 -39 -30 -40 -102 -47 -41 -4 -101 -9 -132 -12 l-58
        -6 0 85 0 84 33 5 c57 10 110 13 202 12 l90 -1 -3 -40z m-444 -72 c2 -46 -1
        -83 -6 -83 -5 0 -76 -7 -157 -15 -81 -9 -148 -15 -150 -13 -1 2 -5 39 -9 84
        l-6 81 142 15 c200 22 182 28 186 -69z"
      />
    </g>
  </svg>
);

Crab.propTypes = {
  fillColor: PropTypes.string.isRequired,
};

export default Crab;