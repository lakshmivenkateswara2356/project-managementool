import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import { SlHome } from "react-icons/sl";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineWorkOutline } from "react-icons/md";


const fileManager = [
    {
        name: 'Dashboard',
        icon: <SlHome fontSize='small' />,
        to: '/',
    },
    {
        name: 'Projects',
        icon: <LiaClipboardListSolid  fontSize='small' />,
        to: '/Projects',
    },
    {
        name: 'Your work',
        icon: <MdOutlineWorkOutline  fontSize='small' />,
        to: '/yourwork',
    },
    {
        name: 'Trash',
        icon: <DeleteOutlinedIcon fontSize='small' />,
        to: '/trash',
    },
];

const sharedFile = [
    {
        name: 'Team',
        icon: <PeopleIcon fontSize='small' />,
        to: '/shared-with-me',
    },
    {
       name: 'Shared by me',
       icon: <PersonIcon fontSize='small' />,
       to: '/shared-by-me',
    },
];

export { fileManager, sharedFile };
