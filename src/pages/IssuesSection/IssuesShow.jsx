import {
    Box,
    Typography,
    IconButton,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    Paper,
    Select,
    MenuItem,
    Avatar,
    Button,
    Card,
    CardContent,
} from '@mui/material';
import { useState } from 'react';
import InfoIcon from '@mui/icons-material/InfoOutlined';

// Sample issues data
const initialIssues = [
    {
        type: 'CHR-6',
        key: 'Edit subscription plan',
        status: 'Review',
        assignee: 'Dave Maxwell',
        reporter: 'Daniel Thompson',
        priority: 'High',
        createdAt: '05-08-2024',
        updatedAt: '07-08-2024',
        dueDate: '20-10-2024',
    },
    {
        type: 'CHR-5',
        key: 'Fix pagination error',
        status: 'To Do',
        assignee: 'Rohit Anderson',
        reporter: 'Rohan Singh',
        priority: 'Medium',
        createdAt: '19-08-2024',
        updatedAt: '30-08-2024',
        dueDate: '30-08-2024',
    },
    {
        type: 'ES-137',
        key: 'Structure the frontend code',
        status: 'Review',
        assignee: 'Dave Maxwell',
        reporter: 'Daniel Thompson',
        priority: 'Low',
        createdAt: '26-08-2024',
        updatedAt: '27-08-2024',
        dueDate: '21-09-2024',
    },
    // Add more issues as needed
];

const IssuesShow = () => {
    const [issues, setIssues] = useState(initialIssues); // State for issues
    const [view, setView] = useState('list'); // State for managing view

    // Function to handle status change
    const handleStatusChange = (index, newStatus) => {
        const updatedIssues = [...issues];
        updatedIssues[index].status = newStatus;
        setIssues(updatedIssues);
    };

    // Function to handle priority change
    const handlePriorityChange = (index, newPriority) => {
        const updatedIssues = [...issues];
        updatedIssues[index].priority = newPriority;
        setIssues(updatedIssues);
    };

    return (
        <Box
            sx={{
                padding: '20px',
                backgroundColor: '#0d0d0d',
                color: '#fff',
                height: '100vh',
                overflowY: 'scroll',
            }}
        >
            {/* Header */}
            <Grid container alignItems="center" justifyContent="space-between" sx={{ marginBottom: '20px' }}>
                <Grid item>
                    <Typography variant="h5" color="white">
                        Issues
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton sx={{ color: 'white' }}>
                        <InfoIcon />
                    </IconButton>
                </Grid>
            </Grid>

            {/* Toggle View Buttons */}
            <Box display="flex" mb={2}>
                <Button
                    variant={view === 'list' ? 'contained' : 'text'}
                    sx={{ color: view === 'list' ? 'white' : '#999', marginRight: '10px' }}
                    onClick={() => setView('list')}
                >
                    List
                </Button>
                <Button
                    variant={view === 'board' ? 'contained' : 'text'}
                    sx={{ color: view === 'board' ? 'white' : '#999' }}
                    onClick={() => setView('board')}
                >
                    Board
                </Button>
            </Box>

            {/* Conditional Rendering Based on View */}
            {view === 'list' ? (
                <TableContainer component={Paper} sx={{ backgroundColor: '#1c1c1c' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: '#fff', width: '5%' }}>
                                    <Checkbox sx={{ color: 'white' }} />
                                </TableCell>
                                <TableCell sx={{ color: '#fff' }}>Type</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Keys</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Summary</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Status</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Assignee</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Reporter</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Priority</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Created At</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Updated At</TableCell>
                                <TableCell sx={{ color: '#fff' }}>Due Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {issues.map((issue, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Checkbox sx={{ color: 'white' }} />
                                    </TableCell>
                                    <TableCell sx={{ color: '#fff' }}>{issue.type}</TableCell>
                                    <TableCell sx={{ color: '#fff' }}>{issue.key}</TableCell>
                                    <TableCell sx={{ color: '#fff' }}>{issue.key}</TableCell>

                                    {/* Status Select */}
                                    <TableCell>
                                        <Select
                                            value={issue.status}
                                            onChange={(e) => handleStatusChange(index, e.target.value)}
                                            sx={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent background
                                                color: 'white',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                border: '1px solid white', // Border for visibility
                                            }}
                                        >
                                            <MenuItem value="To Do">To Do</MenuItem>
                                            <MenuItem value="Review">Review</MenuItem>
                                            <MenuItem value="In Progress">In Progress</MenuItem>
                                        </Select>
                                    </TableCell>

                                    <TableCell sx={{ color: '#fff' }}>{issue.assignee}</TableCell>
                                    <TableCell sx={{ color: '#fff' }}>{issue.reporter}</TableCell>

                                    {/* Priority Select */}
                                    <TableCell>
                                        <Select
                                            value={issue.priority}
                                            onChange={(e) => handlePriorityChange(index, e.target.value)}
                                            sx={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent background
                                                color: 'white',
                                                borderRadius: '5px',
                                                padding: '5px',
                                                border: '1px solid white', // Border for visibility
                                            }}
                                        >
                                            <MenuItem value="High">High</MenuItem>
                                            <MenuItem value="Medium">Medium</MenuItem>
                                            <MenuItem value="Low">Low</MenuItem>
                                        </Select>
                                    </TableCell>

                                    <TableCell sx={{ color: '#fff' }}>{issue.createdAt}</TableCell>
                                    <TableCell sx={{ color: '#fff' }}>{issue.updatedAt}</TableCell>
                                    <TableCell sx={{ color: '#fff' }}>{issue.dueDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Grid container spacing={2}>
                    {issues.map((issue, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    backgroundColor: '#1c1c1c',
                                    color: '#fff',
                                    padding: '10px',
                                    borderRadius: '10px',
                                }}
                            >
                                <CardContent>
                                    <Checkbox sx={{ color: 'white' }} />
                                    <Typography variant="h6">{issue.key}</Typography>
                                    <Typography variant="body2" color="gray">
                                        {issue.type}
                                    </Typography>
                                    <Typography variant="body2" color="gray">
                                        {issue.status}
                                    </Typography>
                                    <Box display="flex" alignItems="center" mt={2}>
                                        <Avatar sx={{ marginRight: '10px' }} />
                                        <Typography variant="body2">{issue.assignee}</Typography>
                                    </Box>
                                    <Typography variant="body2" color="gray" mt={1}>
                                        Priority:{' '}
                                        <span style={{ color: issue.priority === 'High' ? '#ff4d4d' : '#ffd700' }}>
                                            {issue.priority}
                                        </span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default IssuesShow;
