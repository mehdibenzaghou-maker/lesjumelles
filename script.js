// ========================================
// LES JUMELLES - SCRIPT
// ========================================

// ===== MODEL VIEWER (Three.js) =====
async function initModelViewers() {
  const containers = document.querySelectorAll('.model-container[data-glb]');
  
  for (const container of containers) {
    const glbUrl = container.getAttribute('data-glb');
    const placeholder = container.querySelector('.model-placeholder');
    
    if (!glbUrl || glbUrl.trim() === '') {
      if (placeholder) placeholder.innerHTML = '<i class="fas fa-utensils"></i>';
      continue;
    }

    try {
      const module = await import('three');
      const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
      const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');

      const scene = new module.Scene();
      
      const camera = new module.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
      camera.position.set(2, 1.5, 3);

      const renderer = new module.WebGLRenderer({ 
        antialias: true,
        alpha: true
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      container.appendChild(renderer.domElement);

      // Lighting
      const ambientLight = new module.AmbientLight(0x404060, 0.5);
      scene.add(ambientLight);

      const mainLight = new module.DirectionalLight(0xffeedd, 1.5);
      mainLight.position.set(3, 5, 4);
      mainLight.castShadow = true;
      scene.add(mainLight);

      const fillLight = new module.DirectionalLight(0x4466ff, 0.3);
      fillLight.position.set(-3, 2, -2);
      scene.add(fillLight);

      const rimLight = new module.DirectionalLight(0xffdd88, 0.5);
      rimLight.position.set(0, -1, -4);
      scene.add(rimLight);

      const hemiLight = new module.HemisphereLight(0x884466, 0x442233, 0.6);
      scene.add(hemiLight);

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.5;
      controls.minDistance = 1.5;
      controls.maxDistance = 8;
      controls.target.set(0, 0, 0);

      // Load GLB
      const loader = new GLTFLoader();
      const gltf = await loader.loadAsync(glbUrl);
      
      const model = gltf.scene;
      model.scale.set(1, 1, 1);
      scene.add(model);

      // Center and fit model
      const box = new module.Box3().setFromObject(model);
      const center = box.getCenter(new module.Vector3());
      const size = box.getSize(new module.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2.2 / maxDim;
      model.scale.set(scale, scale, scale);
      model.position.sub(center.multiplyScalar(scale));

      // Animation loop
      function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }
      animate();

      // Handle resize
      function resizeRenderer() {
        const width = container.clientWidth;
        const height = container.clientHeight;
        if (width > 0 && height > 0) {
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        }
      }

      const resizeObserver = new ResizeObserver(resizeRenderer);
      resizeObserver.observe(container);

      // Cleanup placeholder
      if (placeholder) {
        placeholder.style.display = 'none';
      }

      // Store cleanup function
      container._cleanup = () => {
        resizeObserver.disconnect();
        renderer.dispose();
        controls.dispose();
      };

    } catch (error) {
      console.error('Error loading 3D model:', error);
      if (placeholder) {
        placeholder.innerHTML = '<i class="fas fa-cube"></i><span>3D non disponible</span>';
      }
    }
  }
}

// ===== NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
  // Highlight current page in nav
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Highlight current menu section
  document.querySelectorAll('.menu-navigation a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // WhatsApp reservation buttons
  document.querySelectorAll('.reservation-btn, .whatsapp-footer, .whatsapp-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('https://wa.me/213770189910', '_blank');
    });
  });

  // Initialize model viewers
  setTimeout(initModelViewers, 500);
});

// ===== RE-INIT MODELS ON PAGE LOAD =====
window.addEventListener('load', function() {
  setTimeout(initModelViewers, 500);
});
