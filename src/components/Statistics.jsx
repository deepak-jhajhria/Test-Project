import { C } from "./common/style"
import { StatisticsSecVector } from "./common/Icons"
import { statisticsSecData } from "./common/Helper"

const Statistics = () => {

    return (
        <C.Section $bgColor='#EAEAEA' $overflow='hidden'>
            <C.Container $mdPaddingTop='108px' $smPaddingTop='80px' $PaddingTop='50px' $mdPaddingBottom='165px' $smPaddingBottom='64px' $paddingBottom='36px' $position='relative'>
                <C.H2>Statistics For <C.Span>Today</C.Span></C.H2>
                <span className="absolute top-18 left-0"><StatisticsSecVector /></span>
                <C.Row $mdMarginTop='108px' $smMarginTop='60px' $marginTop='36px' $lgGap='24px' $smGap='20px' $position="relative">
                    {
                        statisticsSecData.map((item, index) => (
                            <C.Col key={index} $flexDirection='column'>
                                <div className="maxWidth-278 mx-auto">
                                    <C.H2 $mdFontSize='64px' $mdLineHeight='76px'>{item.title}</C.H2>
                                    <C.P $mdPaddingTop='45px' $smPaddingTop='32px' $textAlign='center' $textColor='#140865'>{item.description}</C.P>
                                </div>
                            </C.Col>
                        ))
                    }
                </C.Row>
            </C.Container>
        </C.Section>
    )
}

export default Statistics
