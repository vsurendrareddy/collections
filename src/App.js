import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from './components/Header';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { ChevronLeftOutlined, Height } from '@mui/icons-material';
import CardComponent from './components/CardComponent';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CardContent, Card, FormControl, FormControlLabel, FormLabel, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const deleteStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  minHeight: 200,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 3,
  p: 2
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  minHeight:350,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 3,
  p: 2,
};

function App() {
  const [open, setOpen] = React.useState(true);
  const [modal, setModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [collections, setCollections] = React.useState([
    {
      id:1,
      name:"My Collection",
      description:"Collection description that is added by the user when creating the collection to inform users of the content etc;"
    },
    {
      id:2,
      name:"My Collection",
      description:"Collection description that is added by the user when creating the collection to inform users of the content etc;"
    },
    {
      id:3,
      name:"My Collection",
      description:"Collection description that is added by the user when creating the collection to inform users of the content etc;"
    },
    {
      id:4,
      name:"My Collection",
      description:"Collection description that is added by the user when creating the collection to inform users of the content etc;"
    }
  ]);
  const [collectionName, setCollectionName] = React.useState('');
  const [collectionDescription, setCollectionDescription] = React.useState('');
  const [collectionId, setCollectionId ] = React.useState('');
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const handleDeleteModal = (id) => {
    setDeleteModal(true);
    setCollectionId(id);
  };
  const handleDeleteClose = () => setDeleteModal(false);

  const handleClick = () => {
    setOpen(!open);
  };

  React.useEffect(()=>{
    //  console.log(collectionDescription, collectionName);
  },[collectionName, collectionDescription, collections]);

  const handleSubmit = () => {
     let obj = {
        id:collections.length+1,
        name: collectionName,
        description: collectionDescription
     };
     const arr = collections;
     arr.push(obj);
     setCollections(arr);
     setModal(false);
  }

  const handleDelete = () =>{
    const filterArr = collections.filter(ele => ele.id !== collectionId);
    setCollections(filterArr);
    handleDeleteClose();
  }

  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary="Collections" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="Collection 1" />
                      <ListItemIcon>
                        <ChevronLeftOutlined />
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="Collection 2" />
                      <ListItemIcon>
                        <ChevronLeftOutlined />
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="Collection 3" />
                      <ListItemIcon>
                        <ChevronLeftOutlined />
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="Collection 4" />
                      <ListItemIcon>
                        <ChevronLeftOutlined />
                      </ListItemIcon>
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Typography variant='h5'> My Collections </Typography>
            <Typography sx={{mt:2, mb:2}}> Introducing the collections the ability to organise <br /> your materials your way </Typography>
            <Divider sx={{mt:2, mb:2}}/>
            <Item>
              <Grid container spacing={1}>
                {collections.map((ele, i) => {
                  return (
                    <Grid item xs={4} key={i}>
                      <CardComponent
                        content={ele}
                        handleDeleteModal={handleDeleteModal}
                      />
                    </Grid>
                  );
                })}
                <Grid item xs={4}>
                  <Card
                    variant="outlined"
                    sx={{ backgroundColor: "#E0E0E0" }}
                    onClick={handleOpen}
                  >
                    <CardContent>
                      <AddCircleOutlineIcon
                        sx={{
                          fontSize: 32,
                          color: "#9E9E9E",
                          mt: 6.75,
                          mb: 6.75,
                        }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Grid container> */}
          <Typography variant="h5">New Collection</Typography>
          <FormControl sx={{ width: "100%" }}>
            <FormLabel
              component={"legend"}
              sx={{ mt: 2, color: "#000" }}
              required={true}
            >
              Collection Name
            </FormLabel>
            <TextField
              id="outlined-basic"
              value={collectionName}
              placeholder="Collection Name"
              variant="outlined"
              size="small"
              required={true}
              onChange={(e) => setCollectionName(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <FormLabel
              component={"legend"}
              sx={{ mt: 2, color: "#000" }}
              required={true}
            >
              Collection Description
            </FormLabel>
            <TextField
              id="outlined-multiline-static"
              placeholder="Collection Description"
              multiline
              rows={4}
              size="small"
              // sx={{width:'100%', mt:2}}
              value={collectionDescription}
              onChange={(e) => setCollectionDescription(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <Grid
              container
              sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}
              spacing={1}
            >
              <Grid item></Grid>
              <Grid item>
                <Button variant="text" onClick={handleClose}>Close</Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    background: "#AB47BC",
                    "&:hover": {
                      backgroundColor: "#AB47BC",
                    },
                  }}
                >
                  Create new collection
                </Button>
              </Grid>
            </Grid>
          </FormControl>

          {/* </Grid> */}
        </Box>
      </Modal>
      <Modal
        open={deleteModal}
        onClose={handleDeleteClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={deleteStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            sx={{ width: "100%", alignContent: "center", textAlign: "center" }}
          >
            Delete Collection
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 1,
              width: "100%",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Are you sure you want to delete this collection?
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 1,
              width: "100%",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            you won't be able to undo this.
          </Typography>
          <Button
            variant="contained"
            onClick={handleDelete}
            sx={{
              width:'100%',
              mt:2,
              background: "#AB47BC",
              "&:hover": {
                backgroundColor: "#AB47BC",
              },
            }}
          >
            Delete
          </Button>
          <Button
            variant="text"
            sx={{ width: "100%", mt: 2 }}
            onClick={handleDeleteClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default App;
