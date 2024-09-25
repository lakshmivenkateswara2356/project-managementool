import React, { useState } from 'react';
import { Box } from '@mui/material';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Icon.css'

// Import your icons
import clikklecamp from '../Assets/clikklecampan.png';
import clikklehost from '../Assets/clikklehost.png';
import clikklesign from '../Assets/clikkleesign.png';
import clikklefavic from '../Assets/clikklefaviic.png';
import clikklelaunch from '../Assets/clikklelaunch.png';
import clikklepitch from '../Assets/clikklepitch.png';
import clikkleproj from '../Assets/clikkleproj.png';
import clikklerocket from '../Assets/clikklerocket.png';
import pencil from '../Assets/pencil.jpg'
import { TbPencil } from "react-icons/tb";
import clikklemail from '../Assets/cliklemail.png';

const Icon = (props) => {
    const { sx, ...rest } = props;

    // State to manage icon arrangement and dragging functionality
    const [icons, setIcons] = useState([
        { id: 'clikklecamp', src: clikklecamp },
        { id: 'clikklefavic', src: clikklefavic },
        { id: 'clikklehost', src: clikklehost },
        { id: 'clikklelaunch', src: clikklelaunch },
        { id: 'clikklemail', src: clikklemail },
        { id: 'clikklepitch', src: clikklepitch },
        { id: 'clikkleproj', src: clikkleproj },
        { id: 'clikklerocket', src: clikklerocket },
        { id: 'clikklesign', src: clikklesign },
    ]);

    const [isEditable, setIsEditable] = useState(false);

    // Function to handle drag end event
    const handleOnDragEnd = (result) => {
        if (!result.destination || !isEditable) return; // Prevent action if not editable
        const reorderedIcons = Array.from(icons);
        const [removed] = reorderedIcons.splice(result.source.index, 1);
        reorderedIcons.splice(result.destination.index, 0, removed);
        setIcons(reorderedIcons);
    };

    return (
        <>
            <Box className="responsiveview" sx={{ display: 'flex',flexDirection: 'row', justifyContent: 'center',backgroundColor:'background.default',height:'100%', flexDirection: 'column', alignItems: 'center', ...sx }}>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="droppable-icons">
                        {(provided) => (
                            <Box className="settingtop"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                sx={{ display: 'flex', flexWrap: 'wrap',flexDirection:'column', gap: 1, justifyContent: 'center' }} // Adjusted gap
                            >
                                {icons.map((icon, index) => (
                                    <Draggable key={icon.id} draggableId={icon.id} index={index}>
                                        {(provided) => (
                                            <Box
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                sx={{ width: 40, height: 40 }} // Smaller size for icons
                                            >
                                                <img 
                                                    src={icon.src} 
                                                    alt={icon.id} 
                                                    style={{ 
                                                        maxWidth: '60%', 
                                                        maxHeight: '60%', 
                                                        objectFit: 'contain' // Maintains aspect ratio
                                                    }} 
                                                />
                                            </Box>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </Box>
                        )}
                    </Droppable>
                </DragDropContext>

                {/* Pencil Icon to Toggle Movable Feature */}
                <Box
                    component='img'
                    
                    src={pencil} // Replace with your pencil icon path
                    alt='edit'
                    onClick={() => setIsEditable(prev => !prev)} // Toggle editable state
                    sx={{ cursor: 'pointer', marginTop: 2, width: 30, height: 30 }} // Size for pencil icon
                />
               

            </Box>
        </>
    );
};

export default Icon;
