<template>
  <div class="signup-container">
    <div class="signup-card">
      <div class="signup-header">
        <h1>Créer un compte</h1>
        <p>Rejoignez TaskForce pour optimiser votre gestion de tâches</p>
      </div>
      
      <form class="signup-form" @submit.prevent="handleSignup">
        <div class="form-group">
          <label for="firstName">Prénom</label>
          <input 
            type="text" 
            id="firstName" 
            v-model="form.firstName" 
            required
            placeholder="Votre prénom"
          >
        </div>
        
        <div class="form-group">
          <label for="lastName">Nom</label>
          <input 
            type="text" 
            id="lastName" 
            v-model="form.lastName" 
            required
            placeholder="Votre nom"
          >
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required
            placeholder="votre@email.com"
          >
        </div>
        
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input 
            type="password" 
            id="password" 
            v-model="form.password" 
            required
            placeholder="Votre mot de passe"
          >
        </div>
        
        <div class="form-group">
          <label for="confirmPassword">Confirmer le mot de passe</label>
          <input 
            type="password" 
            id="confirmPassword" 
            v-model="form.confirmPassword" 
            required
            placeholder="Confirmez votre mot de passe"
          >
        </div>
        
        <div class="form-group">
          <label for="role">Rôle</label>
          <select id="role" v-model="form.role" required>
            <option value="">Sélectionnez votre rôle</option>
            <option value="collaborator">Collaborateur</option>
            <option value="manager">Manager</option>
            <option value="project_manager">Responsable de projet</option>
          </select>
        </div>
        
        <button type="submit" class="btn-signup-submit">Créer mon compte</button>
      </form>
      
      <div class="signup-footer">
        <p>Déjà un compte ? <router-link to="/" class="link-login">Se connecter</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
      }
    }
  },
  methods: {
    handleSignup() {
      if (this.form.password !== this.form.confirmPassword) {
        alert('Les mots de passe ne correspondent pas')
        return
      }
      
      console.log('Inscription:', this.form)
    }
  }
}
</script>

<style scoped>
.signup-container {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.signup-card {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px;
}

.signup-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.signup-header h1 {
  font-size: 2.5rem;
  color: #172b4d;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.signup-header p {
  color: #6b778c;
  font-size: 1.1rem;
}

.signup-form {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #172b4d;
  font-weight: 500;
  font-size: 0.9rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background: white;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #0052cc;
  box-shadow: 0 0 0 3px rgba(0,82,204,0.1);
}

.form-group input::placeholder {
  color: #a0a0a0;
}

.btn-signup-submit {
  width: 100%;
  background: #0052cc;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
}

.btn-signup-submit:hover {
  background: #0047b3;
}

.signup-footer {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid #e1e5e9;
}

.signup-footer p {
  color: #6b778c;
  margin: 0;
}

.link-login {
  color: #0052cc;
  text-decoration: none;
  font-weight: 500;
}

.link-login:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .signup-card {
    padding: 2rem;
    margin: 1rem;
  }
  
  .signup-header h1 {
    font-size: 2rem;
  }
}
</style>
