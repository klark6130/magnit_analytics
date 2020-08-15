<script>
  import Input from 'components/core/input/Input.svelte';

  const loginAttrs = {
    required: true,
  };

  const passwordAttrs = {
    required: true,
    type: 'password',
  };

  let login = '';
  let password = '';

  $: disabled = !login || !password;
</script>

<form
  class="txcm-authForm"
  action="/auth">
    <Input
      bind:value={login}
      name="authLogin"
      label="Логин"
      theme="Auth"
      attrs={loginAttrs} />
    <Input
      bind:value={password}
      name="authPassword"
      label="Пароль"
      theme="Auth"
      attrs={passwordAttrs} />
    <button
      class="txcm-authSubmit"
      {disabled}>
        Войти
    </button>
</form>
