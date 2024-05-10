import { headerCardData } from "./common/Helper"
import { C } from "./common/style"

const Header = () => {
    return (
        <C.Header>
            <C.Container $mdPaddingTop='100px' $smPaddingTop='80px' $PaddingTop='50px' $mdPaddingBottom='74px' $smPaddingBottom='64px' $paddingBottom='36px'>
                <div className="maxWidth-806 mx-auto">
                    <C.H2>Understanding leveraged accounts and <C.Span>buying power</C.Span></C.H2>
                    <C.P $mdPaddingTop='23px' $smPaddingTop='18px' $fontSize='20px' $textAlign="center" $opacity='0.7'>Trading with leveraged accounts in CFDs provides traders with increased buying power, enabling them to attain superior results across various markets. By amplifying potential returns and accessing additional capital, traders can capitalize on market opportunities more effectively, enhancing their overall trading performance.</C.P>
                </div>
                <C.Row $mdMarginTop='50px;' $smMarginTop='36px' $marginTop='24px'>
                    {
                        headerCardData.map((item, index) => {
                            return (
                                <C.Col $smWidth='50%' key={index} >
                                    <C.Card>
                                        <span>{item.icon}</span>
                                        <C.H3 $paddingTop='31px'>{item.title}</C.H3>
                                        <C.P $mdPaddingTop='29px' $smPaddingTop='20px' $textAlign='center' $lineHeight='25.6px' $opacity='0.7'>{item.description}</C.P>
                                        <span className="flex absolute bottom-0 left-50 ellipseBlue -translate-x-50 -translate-y-70"></span>
                                    </C.Card>
                                </C.Col>
                            )
                        })
                    }
                </C.Row>
                <div className="flex justify-center">
                    <C.Button $mdMarginTop='50px' $smMarginTop='30px' $marginTop='24px'>SIGN UP</C.Button>
                </div>
            </C.Container>
        </C.Header>
    )
}

export default Header
