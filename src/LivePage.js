import React from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import StreamComponent from './StreamComponent';
import { FaExpand } from 'react-icons/fa';
import { Fullscreen, FullscreenExit, Circle } from '@mui/icons-material';

export default function LivePage() {
    const handleFullScreen = useFullScreenHandle();
  return (
    <div className='live-page-wrapper'>
        <div className='live-display' >
            <div className='live-header'>
                <div>Live</div>
            </div>
            <FullScreen handle={handleFullScreen}>
                <StreamComponent/>
            </FullScreen>
            
            <div className='live-actions'>
                <div className='live-full-screen' onClick={handleFullScreen.enter}>
                    <Fullscreen/>
                </div>
            </div>
        </div>
    </div>
  )
}
