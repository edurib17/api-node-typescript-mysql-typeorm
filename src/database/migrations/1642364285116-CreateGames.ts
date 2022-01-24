import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGames1642364285116 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "games",
        columns: [
          { name: "id", type: "varchar", isPrimary: true },
          { name: "name", type: "varchar", isUnique: true },
          { name: "description", type: "varchar" },
          { name: "price", type: "decimal" },
          { name: "platform_id", type: "varchar" },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            name: "fk_games_platforms",
            columnNames: ["platform_id"],
            referencedTableName: "platforms",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("games");
  }
}
