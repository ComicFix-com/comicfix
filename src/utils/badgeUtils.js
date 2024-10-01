export const getBadges = (user) => {
  const badges = [];

  if (user.contributions.length > 0) {
    badges.push({
      name: 'First PR',
      icon: '🎉',
      description: 'Submitted their first pull request'
    });
  }

  if (user.contributions.length >= 10) {
    badges.push({
      name: 'Active Contributor',
      icon: '🔥',
      description: 'Made 10 or more contributions'
    });
  }

  if (user.topContributor) {
    badges.push({
      name: 'Top Contributor',
      icon: '🏆',
      description: 'One of the top contributors to a project'
    });
  }

  return badges;
};

export const exportBadgesToLinkedIn = (badges) => {
  // Implementation for exporting badges to LinkedIn
  console.log('Exporting badges to LinkedIn:', badges);
};

export const exportBadgesToGitHub = (badges) => {
  // Implementation for exporting badges to GitHub
  console.log('Exporting badges to GitHub:', badges);
};