<script>
  import DashboardFilterGroup from './DashboardFilterGroup.svelte';

  const filterGroups = [
    [
      {
        type: 'stepper',
        content: {
          name: 'filterStepper11',
          pick: 0,
          cancel: true,
          options: [
            {
              label: 'LFL',
              value: 0,
            }, {
              label: 'Non LFL',
              value: 1,
            },
          ],
        },
      },
    ], [
      {
        type: 'pick',
        content: {
          name: 'filterPick21',
          label: 'МА',
          pick: false,
        },
      }, {
        type: 'stepper',
        content: {
          name: 'filterStepper21',
          pick: 1,
          cancel: true,
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
      },
    ], [
      {
        type: 'pick',
        content: {
          name: 'filterPick31',
          label: 'ММ',
          pick: false,
        },
      }, {
        type: 'pick',
        content: {
          name: 'filterPick32',
          label: 'МК',
          pick: false,
        },
      }, {
        type: 'pick',
        content: {
          name: 'filterPick33',
          label: 'МО',
          pick: false,
        },
      }, {
        type: 'pick',
        content: {
          name: 'filterPick34',
          label: 'МС',
          pick: false,
        },
      }, {
        type: 'pick',
        content: {
          name: 'filterPick35',
          label: 'МС+',
          pick: false,
        },
      }, {
        type: 'pick',
        content: {
          name: 'filterPick36',
          label: 'МА',
          pick: false,
        },
      }, {
        type: 'pick',
        content: {
          name: 'filterPick37',
          label: 'СИА',
          pick: false,
        },
      }, {
        type: 'pick',
        content: {
          name: 'filterPick38',
          label: 'HQ',
          pick: false,
        },
      }, {
        type: 'select',
        content: {
          name: 'filterSelect31',
          pick: 0,
          options: [{
            label: 'Подформ.',
          }],
        },
      },
    ], [
      {
        type: 'select',
        content: {
          name: 'filterSelect41',
          pick: 0,
          options: [{
            label: 'Округ',
          }],
        },
      }, {
        type: 'select',
        content: {
          name: 'filterSelect42',
          pick: 0,
          options: [{
            label: 'Подокруг',
          }],
        },
      }, {
        type: 'select',
        content: {
          name: 'filterSelect43',
          pick: 0,
          options: [{
            label: 'Фил./гр.',
          }],
        },
      }, {
        type: 'select',
        content: {
          name: 'filterSelect44',
          pick: 0,
          options: [{
            label: 'Подфил./подгр.',
          }],
        },
      }, {
        type: 'select',
        content: {
          name: 'filterSelect45',
          pick: 0,
          options: [{
            label: 'ТО',
          }],
        },
      },
    ],
  ];

</script>

<div class="txcm-dashboardFilter">
  {#each filterGroups as group}
    <DashboardFilterGroup
      {group}/>
  {/each}
</div>
