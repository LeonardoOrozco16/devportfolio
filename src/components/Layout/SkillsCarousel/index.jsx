import { CardCarousel, CarouselItem} from "@components/CardsCarousel";
import { LogosComponents } from "@structure/SVGComponents/LogosComponents";
function SkillsCarousel({skillList}) {
    return (
        <CardCarousel> 
            {skillList.map((skill) => (
                <CarouselItem key={skill} nameItem={skill} >
                    <LogosComponents type={skill} />
                </CarouselItem>
            ))}
        </CardCarousel>
    )
}
export{SkillsCarousel}