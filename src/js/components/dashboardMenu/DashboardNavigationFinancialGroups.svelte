<script>
  import DashboardNavigationGroup from './DashboardNavigationGroup.svelte';

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
    }, {
      label: 'Продажи',
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
    }, {
      label: 'Промо',
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
    }, {
      label: 'Товарные Запасы',
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
    }, {
      label: 'Потери',
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
    }, {
      label: 'Развитие',
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
    }, {
      label: 'Торговые объекты',
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
    }, {
      label: 'Персонал',
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
  ];
</script>

{#each navGroups as group, index}
  <DashboardNavigationGroup
   {...group}/>
{/each}
