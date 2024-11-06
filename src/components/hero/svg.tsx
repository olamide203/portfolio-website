import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSVG: React.FC = () => {
  return (
    <div className="relative w-full">
      <AspectRatio ratio={1}>
        <svg className="absolute top-0 left-0" viewBox="0 0 80 80">
          <defs>
            <clipPath id="border">
              <path
                id="border_path"
                d="M 12 0
                   L 42 0
                   A 6 6 0 0 1 48 6 
                   A 6 6 0 0 0 54 12
                   L 74 12
                   A 6 6 0 0 1 80 18
                   L 80 74 
                   A 6 6 0 0 1 74 80
                   A 6 6 0 0 1 68 74 
                   L 68 74
                   A 6 6 0 0 0 62 68 
                   L 6 68
                   A 6 6 0 0 1 0 62
                   L 0 18 
                   A 6 6 0 0 1 6 12 
                   A 6 6 0 0 0 12 6
                   A 6 6 0 0 1 18 0
                   Z
                   M 0 5
                   A 5 5 0 0 1 10 5
                   A 5 5 0 0 1 0 5 
                   Z
                   M 74 0 
                   A 5 5 0 0 1 79 5 
                   A 5 5 0 0 1 74 10 
                   L 54 10
                   A 5 5 0 0 1 50 5 
                   A 5 5 0 0 1 54 0 Z
                   M 56 80
                   A 5 5 0 0 1 66 80 Z 
                   M 56 75
                   A 5 5 0 0 1 66 75 Z
                   M 5 80
                   A 5 5 0 0 1 5 70 Z
                   M 10 80
                   A 5 5 0 0 1 10 70 Z
                   M 10 75
                   A 5 5 0 0 1 20 75
                   A 5 5 0 0 1 10 75 Z
                   M 19 80
                   A 5 5 0 0 0 21 70 Z
                   M 26 80
                   A 5 5 0 0 0 24 70 Z
                   M 32 80
                   L 34 80
                   L 39 70
                   L 37 70 Z
                   M 35 80
                   L 37 80
                   L 42 70
                   L 40 70 Z

                                    "
              />
            </clipPath>
            <filter id="grayscale">
              <feColorMatrix
                type="matrix"
                values="0.33 0.33 0.33 0 0
                             0.33 0.33 0.33 0 0
                             0.33 0.33 0.33 0 0
                             0 0 0 1 0"
              />
            </filter>
          </defs>
          <use width="100%" height="100%" href="#border_path" fill="#555D50" />
          <image
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            href="/images/olamide.png"
            clipPath="url(#border)"
          />
        </svg>
      </AspectRatio>
    </div>
  );
};

export default HeroSVG;
