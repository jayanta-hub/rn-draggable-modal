import React from 'react';
export interface HalfModalProps {
    children: React.ReactNode;
    dragIconName?: 'bar' | 'dots';
    dragIconStyle?: object;
    dragIconColor?: string;
    hasDraggable?: boolean;
    hasDraggableIcon?: boolean;
    numberOfDots?: number;
    modalVisible: boolean;
    setModalVisible?: (e: boolean) => void;
    minHeight?: number;
    modalInitialHeight?: number;
    modalWidth?: any;
    modalBackgroundColor?: string;
  }