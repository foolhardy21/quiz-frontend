import { Categories } from "components/Home"
import { Header } from "components/Reusable"
import { useTheme } from "contexts"
import { getBgColor, getTextColor } from "utils"

const Home = () => {
    const { theme } = useTheme()

    return (
        <div
            style={{
                minHeight: '100vh'
            }}
            className={getBgColor(theme)}
        >
            <Header />

            <Categories />

            <p className={`flx flx-center txt-xxlg ${getTextColor(theme)} txt-ucase txt-500`}>play now!</p>

        </div>
    )
}

export default Home