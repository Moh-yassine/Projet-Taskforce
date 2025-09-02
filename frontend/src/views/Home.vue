<template>
    <div id="app">
      <header class="header">
        <div class="logo">TaskForce</div>
        <div class="auth-buttons">
          <button class="btn-login">Se connecter</button>
          <button class="btn-signup" @click="goToSignup">S'inscrire</button>
        </div>
      </header>
      
      <template v-if="$route.path === '/'">
        <main class="main-content">
          <div class="hero-section">
            <h1>Gérez vos tâches intelligemment</h1>
            <p>TaskForce optimise la répartition des tâches selon les compétences et la charge de travail</p>
            <button class="btn-primary">Commencer</button>
          </div>
          
          
        </main>
      </template>
  
      <router-view v-else />
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    methods: {
      goToSignup() {
        this.$router.push('/signup')
      }
    }
  }
  </script>
  
  <style>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f7f9fc;
  }
  

  .header {
    background: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #172b4d;
  }
  
  .auth-buttons button {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    transition: background-color 0.2s ease;
  }
  
  .btn-login {
    background-color: transparent;
    color: #172b4d;
    margin-right: 0.5rem;
  }
  
  .btn-login:hover {
    background-color: #f0f2f5;
  }
  
  .btn-signup {
    background-color: #007bff;
    color: white;
  }
  
  .btn-signup:hover {
    background-color: #0056b3;
  }
  
  .main-content {
    padding: 3rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .hero-section {
    margin-bottom: 4rem;
  }
  
  .hero-section h1 {
    font-size: 3rem;
    color: #172b4d;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .hero-section p {
    font-size: 1.2rem;
    color: #5e6c84;
    margin-bottom: 2rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  
  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .feature-card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    text-align: left;
  }
  
  .feature-card h3 {
    font-size: 1.5rem;
    color: #172b4d;
    margin-bottom: 0.8rem;
  }
  
  .feature-card p {
    color: #5e6c84;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      padding: 1rem;
    }
  
    .auth-buttons {
      margin-top: 1rem;
    }
  
    .auth-buttons button {
      margin-right: 0.2rem;
      margin-left: 0.2rem;
    }
  
    .hero-section h1 {
      font-size: 2.2rem;
    }
  
    .hero-section p {
      font-size: 1rem;
    }
  
    .main-content {
      padding: 2rem 1rem;
    }
  }
  </style>