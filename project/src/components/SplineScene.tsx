import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const SplineScene = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/5tJhCq2uFUX0O2Uh/scene.splinecode');

    return () => {
      app.dispose();
    };
  }, []);

  return <canvas id="canvas3d" className="w-full h-full" />;
};

export default SplineScene;