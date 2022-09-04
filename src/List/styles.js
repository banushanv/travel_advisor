import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
export default makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    loading: {
        height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
    container: {
        padding: '25px',
    },
    marginBottom: {
        marginBottom: '30px',
    },
    list: {
        height: '75vh', overflow: 'auto',
    },
    root: {
        maxWidth: 380,
        marginTop: 15,
        marginLeft: 15
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
      button: {
        display: 'block',
        marginTop: theme.spacing(2),
      },
      rating: {
        paddingRight: '16.9%', // 16:9
      }
}));