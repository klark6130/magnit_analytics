<script>
  const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
</script>

<ul
  class="txcm-datepickerMonths">
    {#each months as month}
      <li
        class="txcm-datepickerMonth">
          <button
            class="txcm-datepickerMonthButton">
              {month}
          </button>
      </li>
    {/each}
</ul>
