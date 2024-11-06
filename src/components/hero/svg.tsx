import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroSVG: React.FC = () => {
  return (
    <div className="relative w-full">
      <AspectRatio ratio={100 / 80}>
        <svg className="absolute top-0 left-0" viewBox="0 0 100 80">
          <defs>
            <clipPath id="border">
              <path
                id="border_path"
                d="M 12 0
                   L 62 0
                   A 6 6 0 0 1 68 6 
                   A 6 6 0 0 0 74 12
                   L 94 12
                   A 6 6 0 0 1 100 18
                   L 100 74 
                   A 6 6 0 0 1 94 80
                   A 6 6 0 0 1 88 74 
                   L 88 74
                   A 6 6 0 0 0 82 68 
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
                   M 94 0 
                   A 5 5 0 0 1 99 5 
                   A 5 5 0 0 1 94 10 
                   L 74 10
                   A 5 5 0 0 1 70 5 
                   A 5 5 0 0 1 74 0 Z
                   M 76 80
                   A 5 5 0 0 1 86 80 Z 
                   M 76 75
                   A 5 5 0 0 1 86 75 Z
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
          </defs>
          <use width="100%" height="100%" href="#border_path" fill="#555D50" />
          {/* <image
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            href="/"
            clipPath="url(#border)"
          /> */}
        </svg>
      </AspectRatio>
    </div>
  );
};

export default HeroSVG;
