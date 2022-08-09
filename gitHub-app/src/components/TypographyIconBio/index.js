import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography } from "@mui/material"

const TypographyIconBio = ({text, icon, mt = 2}) => {
    const icons = {
        company: <BusinessRoundedIcon />,
        email: <EmailIcon />,
        location: <LocationOnRoundedIcon />,
        twitter: <TwitterIcon />,
        blog: <LanguageRoundedIcon/>,
        people: <PeopleAltOutlinedIcon />
    }
    return(
        <Typography
        sx={{
            display:'flex',
            alignItems:'center'
        }}
        mt={mt}
        variant="body2"
        >
        {icons[icon]}
        &nbsp;&nbsp; {text}
        </Typography>
    )
}

export default TypographyIconBio;