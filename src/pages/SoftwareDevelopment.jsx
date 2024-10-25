import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, IconButton, Chip } from '@mui/material';
import Kanbanpng from '../Assets/Kanban.png';
import Scrum from '../Assets/scrum.png';
import Toplevelplan from '../Assets/Top-plan.png';
import cressTeam from '../Assets/Crossteam.png';
import product from '../Assets/Productdiscovery.png';
import productmap from '../Assets/productmap.png';
import idearoad from '../Assets/ideapriority.png';
import Bugtrack from '../Assets/bugtracking.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import individual card detail components
import KanbanDetails from './KanbanDetails';
import ScrumDetails from '../CardItems/ScrumDetails';
import TopLevelPlanDetails from '../CardItems/CrossTeamCollabDetails';
import CrossTeamCollabDetails from '../CardItems/CrossTeamCollabDetails';
import ProductDiscoveryDetails from '../CardItems/ProductDiscoveryDetails';
import ProductRoadmapDetails from '../CardItems/ProductRoadmapDetails';
import IdeaPrioritizationDetails from '../CardItems/IdeaPrioritizationDetails';
import BugTrackingDetails from '../CardItems/BugTrackingDetails';
import Image from '../components/Image';


const softwareDevelopmentCards = [
  {
    title: 'Kanban',
    secondaryImgSrc: 'https://cdn.clikkle.com/images/projects/logo/2023/projects-text.png',
    description: 'See and move your project forward by managing tasks on an easy-to-use board.',
    imgSrc: Kanbanpng,
    isBeta: false, // No beta tag for this card
  },
  {
    title: 'Scrum',
    secondaryImgSrc: 'https://cdn.clikkle.com/images/projects/logo/2023/projects-text.png',
    description: 'Move closer to your project goals with a board, task list, and schedule.',
    imgSrc: Scrum,
  
    isBeta: true, // Add beta tag for this card
  },
  {
    title: 'Top-Level Planning',
    secondaryImgSrc: 'https://cdn.clikkle.com/images/projects/logo/2023/projects-text.png',
    description: 'Keep track of work across different projects and make a simple plan to share with stakeholders.',
    imgSrc: Toplevelplan,
   
    isBeta: true,
  },
  {
    title: 'Cross-Team Collaboration',
    secondaryImgSrc: 'https://cdn.clikkle.com/images/projects/logo/2023/projects-text.png',
    description: 'Collaborate efficiently with teams across different projects.',
    imgSrc: cressTeam,
    
    isBeta: true,
  },
  {
    title: 'Product Discovery',
    secondaryImgSrc: 'https://cdn.clikkle.com/images/projects/logo/2023/projects-text.png',
    description: 'Discover and manage product ideas before moving to development.',
    imgSrc: product,
    
    isBeta: true,
  },
  {
    title: 'Product Roadmap',
    secondaryImgSrc: 'https://cdn.clikkle.com/images/projects/logo/2023/projects-text.png',
    description: 'Map out your product development over time.',
    imgSrc: productmap,
   
    isBeta: true, // Add beta tag for this card
  },
  {
    title: 'Idea Prioritization',
    secondaryImgSrc: 'https://cdn.clikkle.com/images/projects/logo/2023/projects-text.png',
    description: 'Rank and prioritize product ideas to focus on the right tasks.',
    imgSrc: idearoad,
  
    isBeta: true,
  },
  {
    title: 'Bug Tracking',
    secondaryImgSrc: 'https://cdn.clikkle.com/images/projects/logo/2023/projects-text.png',
    description: 'Track bugs and resolve issues efficiently during development.',
    imgSrc: Bugtrack,
   
    isBeta: true,
  },
];

const SoftwareDevelopment = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
  };

  const renderCardDetails = () => {
    switch (selectedCard) {
      case 'Kanban':
        return <KanbanDetails />;
      case 'Scrum':
        return <ScrumDetails />;
      case 'Top-Level Planning':
        return <TopLevelPlanDetails />;
      case 'Cross-Team Collaboration':
        return <CrossTeamCollabDetails />;
      case 'Product Discovery':
        return <ProductDiscoveryDetails />;
      case 'Product Roadmap':
        return <ProductRoadmapDetails />;
      case 'Idea Prioritization':
        return <IdeaPrioritizationDetails />;
      case 'Bug Tracking':
        return <BugTrackingDetails />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ padding: '24px' }}>
    {/* Conditionally render heading and description only if no card is selected */}
    {!selectedCard && (
      <>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '16px', fontSize: '22px' }}>
          Software Development
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '32px', maxWidth: '700px' }}>
          Organize, track, and launch great software. Quickly get started with templates that fit your team's style of work, plus easy integrations for DevOps teams to connect their tools and processes.
        </Typography>
      </>
    )}

    {/* Render the selected card's details, or the card list if no card is selected */}
    {selectedCard ? (
      renderCardDetails()
    ) : (
      <Grid container spacing={2}>
        {softwareDevelopmentCards.map((card, index) => (
          <Grid item xs={12} key={index}>
            <Card
              onClick={() => handleCardClick(card.title)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: 'background.default',
                borderRadius: '12px',
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#2E2E2E' },
              }}
            >
              <Box
                sx={{
                  width: '152px',
                  height: '92px',
                  marginRight: '16px',
                  borderRadius: '8px',
                  backgroundImage: `url(${card.imgSrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: { xs: 'none', sm: 'block' },
                }}
              />

              <CardContent sx={{ flexGrow: 1, padding: '0' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '4px' }}>
  {card.title}
  {card.isBeta && (
    <Chip 
      label="Beta" 
      size="small" 
      sx={{ 
        marginLeft: '8px', 
        backgroundColor: '#fecc62', 
        color: '#000', // Optional: Makes the text black for better contrast
        fontWeight: 'bold',
      }} 
    />
  )}
</Typography>

                
                <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                  {card.projectType}
                </Typography>

                {/* Adding the image below the projectType */}
                <Image
                  src={card.secondaryImgSrc}
                  alt={card.projectType}
                  style={{ width: '100px', marginBottom: '8px' }}
                />
                <Typography variant="body1">{card.description}</Typography>
              </CardContent>

              <IconButton>
                <ArrowForwardIosIcon sx={{ color: '#A0A0A0' }} />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    )}
  </Box>
  );
};

export default SoftwareDevelopment;
