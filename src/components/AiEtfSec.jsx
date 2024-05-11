import { C } from "./common/style"
import aiImage from "../assets/images/etfImage.png"
import etfEllipse from "../assets/images/etfEllipse.png"
import etfEllipseFirst from "../assets/images/etfEllipseFirst.png"
import etfEllipseSecond from "../assets/images/etfEllipseSecond.png"
const AiEtfSec = () => {

    return (
        <section className="relative overflow-hidden ">
            <C.Ellipse $right='-4%' $left='unset'></C.Ellipse>
            <img className="absolute top-0 w-100 left-0 z-0" src={etfEllipseFirst} alt="etfEllipseFirst" />
            <C.Container $mdPaddingTop='245px' $lgPaddingTop='140px' $smPaddingTop='80px' $PaddingTop='50px'  $mdPaddingBottom='185px' $smPaddingBottom='64px' $lgPaddingBottom='140px' $paddingBottom='50px' $position='relative' $zIndex='10'>
                <img className="absolute top-0 w-100 left-0 z-0" src={etfEllipse} alt="etfEllipse" />
                <img className="absolute top-42 w-100 left-0 z-0 " src={etfEllipseSecond} alt="etfEllipseSecond" />
                <div className="maxWidth-806 mx-auto relative z-10">
                    <C.H2 $textColor="white">How to benefit by investing <br/> in AI ETFs for <C.Span>high returns</C.Span></C.H2>
                    <C.P $mdPaddingTop='23px' $smPaddingTop='18px' $fontSize='20px' $textAlign="center" $opacity='0.7' $textColor='white'>Artificial Intelligence Exchange Traded Funds are those funds that focus only on the companies that have evolved in the development of new products or services and technological improvements related to AI.</C.P>
                </div>
                <C.Row $alignItems='center' $mdMarginTop='75px' $smMarginTop='50px' $marginTop='36px'>
                    <C.Col $lgWidth='40%' $mdWidth='40%' $smWidth='100%'>
                        <img className="w-100 maxWidth-471" src={aiImage} alt="Ai ETF" />
                    </C.Col>
                    <C.Col $lgWidth='56%' $mdWidth='56%' $smWidth='100%' $flexDirection='column'>
                        <C.P $opacity='0.7' $lineHeight='25.6px' $textColor='white' $mdTextAlign='center'>Artificial intelligence has been significantly advancing in various industries, from healthcare and finance to manufacturing and entertainment. This growth has piqued investor interest in companies at the forefront of AI innovation.</C.P>
                        <C.P $mdPaddingTop='20px' $lineHeight='25.6px' $opacity='0.7' $textColor='white' $mdTextAlign='center'>What are you waiting for? AI is revolutionizing everything, and investors got fantastic returns in AI ETFs during these years.</C.P>
                        <C.P $mdPaddingTop='20px' $lineHeight='25.6px' $opacity='0.7' $textColor='white' $mdTextAlign='center'>From all such technological advancements and the boom in the IT industry, the price of AI ETFs has been increasing tremendously.</C.P>
                    </C.Col>
                </C.Row>
            </C.Container>
        </section>
    )
}


export default AiEtfSec
