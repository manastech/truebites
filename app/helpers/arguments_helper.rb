module ArgumentsHelper
  def argument_versions argument
    argument.argument_views.map(&:last_version).map { |version|
      {
        view_id: version.argument_view_id,
        version_id: version.id,
        user: { id: version.user.id, name: version.user.name },
        lastmod: version.created_at,
        statements: version.statements.map(&:content)
      }
    }
  end
end
