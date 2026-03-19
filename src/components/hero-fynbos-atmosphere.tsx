const reedBedPaths = [
  "M0 760C26 716 62 680 114 658C176 630 244 632 310 652C352 666 388 694 420 760V760H0Z",
  "M18 760C38 702 64 632 108 558C96 636 94 706 98 760Z",
  "M64 760C82 694 108 610 148 530C140 622 140 696 144 760Z",
  "M116 760C132 692 156 604 194 516C190 622 192 698 196 760Z",
  "M172 760C188 694 212 610 246 532C248 632 252 704 256 760Z",
  "M230 760C248 698 272 624 304 554C312 642 318 710 320 760Z",
  "M286 760C306 706 330 646 360 588C374 658 382 716 380 760Z",
] as const

const reedStemPaths = [
  "M22 760C30 690 44 622 64 548C82 486 96 432 114 382C138 310 164 234 198 152",
  "M36 760C44 698 56 638 74 566C92 498 108 442 126 390C148 322 174 246 208 162",
  "M54 760C60 708 74 648 92 580C108 518 124 462 146 408C170 344 198 270 236 182",
  "M72 760C78 712 92 656 110 596C130 532 150 478 174 424C202 358 230 286 270 196",
  "M92 760C100 716 114 664 134 606C154 546 176 494 202 438C232 372 264 300 304 214",
  "M114 760C122 718 136 670 156 616C180 552 204 500 232 446C264 386 298 320 338 238",
  "M136 760C146 718 162 672 184 622C210 564 236 514 266 460C300 400 334 338 374 262",
  "M160 760C170 718 188 678 210 634C240 576 268 528 298 478C332 422 364 366 398 300",
  "M186 760C198 722 218 684 244 644C274 594 304 550 336 506C360 472 384 440 404 402",
  "M10 760C22 720 34 676 50 628C66 580 84 534 104 486C128 426 150 374 174 322",
  "M148 760C156 708 170 654 188 594C208 524 228 464 252 402C274 348 294 302 320 248",
  "M202 760C214 718 234 674 256 626C282 570 308 518 334 460C356 412 378 366 402 320",
] as const

const reedWispPaths = [
  "M170 210C196 186 224 164 258 146C286 132 316 122 346 118",
  "M210 174C238 152 270 134 304 122C330 114 356 110 384 108",
  "M246 158C274 136 304 120 338 110C362 102 386 98 410 96",
  "M130 234C154 212 182 192 214 176C240 164 268 154 296 148",
  "M92 274C118 246 150 222 184 202C208 188 236 176 264 168",
] as const

function EstuaryReedCluster({ className }: { className: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 420 760" className="hero-fynbos-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="hero-reed-bed" fill="currentColor">
          {reedBedPaths.map((path, index) => (
            <path key={`reed-bed-${index}`} d={path} />
          ))}
        </g>
        <g className="hero-reed-stems" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          {reedStemPaths.map((path, index) => (
            <path
              key={`reed-stem-${index}`}
              d={path}
              strokeWidth={index % 4 === 0 ? 2.8 : index % 3 === 0 ? 2.2 : 1.6}
            />
          ))}
        </g>
        <g className="hero-reed-wisps" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          {reedWispPaths.map((path, index) => (
            <path key={`reed-wisp-${index}`} d={path} strokeWidth={index % 2 === 0 ? 1.15 : 0.9} />
          ))}
        </g>
      </svg>
    </div>
  )
}

export function HeroFynbosAtmosphere() {
  return (
    <div aria-hidden="true" className="hero-fynbos-atmosphere">
      <EstuaryReedCluster className="hero-fynbos-cluster hero-fynbos-cluster-left" />
      <div className="hero-fynbos-middle-haze" />
      <EstuaryReedCluster className="hero-fynbos-cluster hero-fynbos-cluster-right" />
    </div>
  )
}
