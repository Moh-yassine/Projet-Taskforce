<template>
  <div id="app">
    <header class="header">
      <div class="logo">TaskForce</div>
      <div class="auth-buttons">
        <button class="btn-login">Se connecter</button>
        <button class="btn-signup">S'inscrire</button>
      </div>
    </header>
    
  </div>
</template>

<script>
export default {
  name: 'App'
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

.auth-buttons {
  display: flex;
  gap: 1rem;
}

.btn-login {
  background: transparent;
  color: #172b4d;
  border: 1px solid #172b4d;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.btn-signup {
  background: #0052cc;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.hero-section {
  text-align: center;
  margin-bottom: 4rem;
}

.hero-section h1 {
  font-size: 3rem;
  color: #172b4d;
  margin-bottom: 1rem;
}

.hero-section p {
  font-size: 1.2rem;
  color: #6b778c;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn-primary {
  background: #0052cc;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 500;
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
}

.feature-card h3 {
  color: #172b4d;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: #6b778c;
  line-height: 1.6;
}
</style>
