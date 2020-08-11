<script>
  import DashboardFilterGroup from './DashboardFilterGroup.svelte';

  const filterGroup1 = [
    {
      type: 'picker',
      content: {
        name: 'filterStepper11',
        pick: 0,
        options: [
          {
            label: 'LFL',
            value: 0,
          }, {
            label: 'Non LFL',
            value: 1,
          },
        ],
      }
    }
  ];

  const filterGroup2 = [
    {
      type: 'pick',
      content: {
        option: {
          label: 'MA',
          value: false,
        }
      },
    }, {
      type: 'picker',
      content: {
        name: 'filterStepper21',
        pick: 1,
        options: [
          {
            label: 'IAS 17',
            value: 0,
          }, {
            label: 'IFRS 16',
            value: 1,
          },
        ],
      },
    }
  ]

  let filterGroups = [filterGroup1, filterGroup2]
</script>

<div class="txcm-dashboardFilter">
  {#each filterGroups as group}
    <DashboardFilterGroup
      {group}/>
  {/each}
</div>
