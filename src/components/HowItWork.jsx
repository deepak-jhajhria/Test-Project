import { C } from "./common/style"
import { howItWorkData } from "./common/Helper"
import { LineVector } from "./common/Icons"

const HowItWork = () => {

    return (
        <C.Section $bgColor="#FFF">
            <C.Container $mdPaddingTop='80px' $smPaddingTop='64px' $PaddingTop='50px' $mdPaddingBottom='180px' $smPaddingBottom='64px' $paddingBottom='26px' $position='relative'>
                <div className="maxWidth-991 mx-auto">
                    <C.H2>How it works</C.H2>
                    <C.P $textAlign='center' $fontSize='20px' $textColor='#150866'>If you've used ChatGPT, the OpenAI chatbot that has wowed users by writing code and instantly answering complex questions, you've gotten a glimpse into the next frontier in artificial intelligence, as big tech companies are racing to develop the leading AI chatbot.</C.P>
                    <C.P $textAlign='center' $fontSize='20px' $textColor='#150866'>If you want to get portfolio exposure to AI companies but don’t want to identify individual AI stocks, you can invest in an AI-focused exchange-traded fund(ETF). AI ETFs provide exposure to a board range of the best AI companies, eliminating the need to research and choose individual stocks on your own.</C.P>
                </div>
                <C.H2 $mdPaddingTop='80px' $smPaddingTop='64px' $paddingTop='50px'>You have to follow some steps</C.H2>
                <C.Row $mdMarginTop='80px' $smMarginTop='64px' $marginTop='28px' $lgGap='64px' $smGap='8px'>
                <span className="absolute w-100 maxWidth-972 top-57 left-11 xlHidden"><LineVector /></span>
                    {
                        howItWorkData.map((item, index) => (
                            <C.Col key={index} >
                                <C.Card $lgBoxShadow='none' $mdBoxShadow='none' $maxWidth='322px' $justifyContent='space-between' $overflow='visible'>
                                    <div className="flex flex-col align-center">
                                        <div className="stepsIcon flex justify-center"><C.H2 $textColor='white'>{item.id}</C.H2></div>
                                        <C.H3 $textColor='black' $mdPaddingTop='40px'>{item.title}</C.H3>
                                        <C.P $mdPaddingTop='14px' $lineHeight='25.6px' $textAlign='center'>{item.description}</C.P>
                                    </div>
                                    <C.Button $mdMarginTop='30px' $smMarginTop='24px' $marginTop='20px'>{item.btnName}</C.Button>
                                </C.Card>
                            </C.Col>
                        ))
                    }
                </C.Row>
            </C.Container>
        </C.Section>
    )
}

export default HowItWork
