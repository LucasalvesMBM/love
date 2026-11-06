import './AmbientEffects.css';

function Lily({ className }) {
  return (
    <svg className={className} viewBox="0 0 240 250">
      <path className="ambient-effects__stem" d="M124 143C119 179 126 212 144 246" />
      <path className="ambient-effects__leaf" d="M129 193C91 169 73 183 75 201C91 210 111 207 129 193Z" />
      <path className="ambient-effects__leaf" d="M134 217C157 185 178 190 185 205C173 219 153 224 134 217Z" />
      <path className="ambient-effects__petal" d="M121 133C91 110 63 77 77 52C101 59 119 91 121 133Z" />
      <path className="ambient-effects__petal" d="M121 133C105 96 104 56 127 36C148 59 143 99 121 133Z" />
      <path className="ambient-effects__petal" d="M121 133C132 95 157 65 184 69C186 98 153 122 121 133Z" />
      <path className="ambient-effects__petal" d="M121 133C157 119 194 117 209 139C194 163 154 155 121 133Z" />
      <path className="ambient-effects__petal" d="M121 133C153 151 176 181 165 205C136 199 121 162 121 133Z" />
      <path className="ambient-effects__petal" d="M121 133C102 165 74 188 50 177C55 148 91 134 121 133Z" />
      <path className="ambient-effects__petal" d="M121 133C87 139 49 132 41 106C62 85 99 106 121 133Z" />
      <circle className="ambient-effects__pollen" cx="121" cy="132" r="5" />
      <path className="ambient-effects__stamen" d="M121 132L99 89M121 132L129 79M121 132L153 91M121 132L171 126" />
      <circle className="ambient-effects__anther" cx="98" cy="87" r="3" />
      <circle className="ambient-effects__anther" cx="129" cy="77" r="3" />
      <circle className="ambient-effects__anther" cx="155" cy="89" r="3" />
      <circle className="ambient-effects__anther" cx="174" cy="126" r="3" />
    </svg>
  );
}

function AmbientEffects() {
  return (
    <div className="ambient-effects" aria-hidden="true">
      <div className="ambient-effects__florals">
        <Lily className="ambient-effects__lily ambient-effects__lily--left" />
        <Lily className="ambient-effects__lily ambient-effects__lily--right" />
      </div>
      <div className="ambient-effects__hearts">
        {Array.from({ length: 14 }, (_, index) => (
          <span
            className="ambient-effects__heart"
            key={index}
            style={{
              '--heart-left': `${(index * 37 + 5) % 94}%`,
              '--heart-delay': `${(index % 8) * -1.1}s`,
              '--heart-duration': `${6 + (index % 5) * 1.2}s`,
              '--heart-size': `${12 + (index % 4) * 4}px`,
              '--heart-drift': `${((index % 5) - 2) * 18}px`,
            }}
          >
            {index % 3 === 0 ? '♡' : '♥'}
          </span>
        ))}
      </div>
      <div className="ambient-effects__stars">
        {Array.from({ length: 18 }, (_, index) => (
          <span
            className="ambient-effects__star"
            key={index}
            style={{
              '--star-left': `${(index * 43 + 4) % 96}%`,
              '--star-top': `${(index * 29 + 7) % 27}%`,
              '--star-delay': `${(index % 7) * -0.65}s`,
              '--star-size': `${8 + (index % 3) * 3}px`,
              '--star-drift': `${((index % 5) - 2) * 9}px`,
            }}
          >
            {index % 4 === 0 ? '✦' : '✧'}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AmbientEffects;
