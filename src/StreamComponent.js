import { useState, useEffect, useRef } from "react";
import { React } from 'react';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";

export default function StreamComponent() {
  return (
    <div>
      <TransformWrapper disablePadding>
        <TransformComponent wrapperStyle={{width: '100%', height: '100%'}} contentStyle={{width: '100%', height: '100%'}}>
            <img src='http://localhost:8000/stream'/>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
