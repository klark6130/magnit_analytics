<script>
  import DashboardNavigationGroup from './DashboardNavigationGroup.svelte'

  const navGroups = [
    {
      label: 'Финансовые показатели',
      links: [
        {
          label: 'Выручка',
          href: '/',
        }, {
          label: 'Валовый доход',
          href: '/',
        }, {
          label: 'OPEX',
          href: '/',
        }, {
          label: 'EBITDA',
          href: '/',
        }, {
          label: 'EBITDAR',
          href: '/',
        }, {
          label: 'Чистая прибыль',
          href: '/',
        }, {
          label: 'Рабочий капитал',
          href: '/',
        },
      ],
    },
  ]
</script>

{#each navGroups as group, index}
  <DashboardNavigationGroup
   {...group}/>
{/each}
