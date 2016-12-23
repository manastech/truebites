module ArgumentsHelper
  def argument_with_versions argument
    argument.argument_views.map { |view|
      version = view.last_version
      {
        view_id: version.argument_view_id,
        version_id: version.id,
        user: { id: version.user.id, name: version.user.name },
        lastmod: version.created_at,
        statements: version.statements.map(&:content) + [version.conclusion]
      }
    }
  end

  def statements_votes argument
    Hash[Statement.where(argument: argument).map {|statement|
      [statement.content, statement.votes_for(current_user)]
    }]
  end
end
