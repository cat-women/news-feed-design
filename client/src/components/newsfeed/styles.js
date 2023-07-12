import { makeStyles } from '@material-ui/core/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'red'
        }
      }
    }
  }
})

const useStyles = makeStyles(() => ({
  container: {
    margin: '20px',
    padding: '10px'
  },
  userName: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginLeft: '30px',
    marginTop: '30px'
  },
  userImage: {
    width: '80%',
    margin: '30px',
    alignItem: 'center'
  },
  content: {
    marginLeft: '30px',
    marginRight: '30px'
  },
  iconsContainer: {
    display: 'flex',
    marginTop: '51px',
    justifyContent: 'center'
    // marginTop: theme.spacing(4)
  },
  likeIcon: {
    // marginRight: theme.spacing(1),
    fontSize: '1.5rem',
    marginRight: '30px'
  },
  dislikeIcon: {
    // marginRight: theme.spacing(1),
    fontSize: '1.5rem',
    marginRight: '30px'
  },
  chatIcon: {
    marginLeft: '30px'
  },
  commentField: {
    margin: '30px',
    display: 'flex',
    width:'70%',
    alignText:'center'
  }
}))

export default useStyles
